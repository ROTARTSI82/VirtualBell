let periodDisp = document.getElementById("period-disp");
let timeDisp = document.getElementById("time-disp");
let nextDisp = document.getElementById("next-disp");

let offDuty = "Free Time";

let schoolsOut = function (days, hours, min, next) {
    periodDisp.textContent = offDuty;
    nextDisp.textContent = next;

    let nextMonday = new Date();
    nextMonday.setDate(nextMonday.getDate() + days);
    nextMonday.setHours(hours);
    nextMonday.setMinutes(min);
    nextMonday.setSeconds(0);

    setTarget(nextMonday);
};

let bellSound = new Audio("bell.wav");
// bellSound.play();

let setTarget = function (date) {
    now = new Date();
    let diffMs = (date - now);
    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // minutes
    let diffSecs = Math.floor((((diffMs % 86400000) % 3600000) % 60000) / 1000); // Seconds

    if (diffSecs >= 10) {
        timeDisp.textContent = "" + diffMins + ":" + diffSecs;
    } else {
        timeDisp.textContent = "" + diffMins + ":0" + diffSecs;
    }

    if (diffDays > 0) {
        if (diffSecs >= 10) {
            timeDisp.textContent = "" + diffDays + " days " + diffHrs + ":" + diffMins + ":" + diffSecs;
        } else {
            timeDisp.textContent = "" + diffDays + " days " + diffHrs + ":" + diffMins + ":0" + diffSecs;
        }
    } else if (diffHrs > 0) {
        if (diffSecs >= 10) {
            timeDisp.textContent = "" + diffHrs + ":" + diffMins + ":" + diffSecs;
        } else {
            timeDisp.textContent = "" + diffHrs + ":" + diffMins + ":0" + diffSecs;
        }
    }
};

let schedule = [];

// Schedule Loading

let now = new Date();
switch (now.getDay()) {
    case (0): { // Sunday
        // No schedule here. Special edge case.
        break;
    }
    case (1): { // Monday
        break;
    }
    case (2): { // Tuesday
        break;
    }
    case (3): { // Wednesday
        break;
    }
    case (4): { // Thursday
        break;
    }
    case (5): { // Friday
        now.setSeconds(0);

        now.setHours(8);
        now.setMinutes(5);
        schedule.push([new Date(now.getTime()), "Period 1"]);

        now.setHours(8);
        now.setMinutes(46);
        schedule.push([new Date(now.getTime()), "Passing Period (1->2)"]);

        now.setHours(8);
        now.setMinutes(51);
        schedule.push([new Date(now.getTime()), "Period 2"]);

        now.setHours(9);
        now.setMinutes(32);
        schedule.push([new Date(now.getTime()), "Break"]);

        now.setHours(9);
        now.setMinutes(42);
        schedule.push([new Date(now.getTime()), "Passing Period (Break->3)"]);

        now.setHours(9);
        now.setMinutes(47);
        schedule.push([new Date(now.getTime()), "Period 3"]);

        now.setHours(10);
        now.setMinutes(28);
        schedule.push([new Date(now.getTime()), "Passing Period (3->4)"]);

        now.setHours(10);
        now.setMinutes(33);
        schedule.push([new Date(now.getTime()), "Period 4"]);

        now.setHours(11);
        now.setMinutes(14);
        schedule.push([new Date(now.getTime()), "L1"]);

        now.setHours(11);
        now.setMinutes(44);
        schedule.push([new Date(now.getTime()), "L2"]);

        now.setHours(12);
        now.setMinutes(14);
        schedule.push([new Date(now.getTime()), "Passing Period (L2->5)"]);

        now.setHours(12);
        now.setMinutes(19);
        schedule.push([new Date(now.getTime()), "Period 5"]);

        now.setHours(13);
        now.setMinutes(0);
        schedule.push([new Date(now.getTime()), "Passing Period (5->6)"]);

        now.setHours(13);
        now.setMinutes(5);
        schedule.push([new Date(now.getTime()), "Period 6"]);

        now.setHours(13);
        now.setMinutes(46);
        schedule.push([new Date(now.getTime()), "Passing Period (6->7)"]);

        now.setHours(13);
        now.setMinutes(51);
        schedule.push([new Date(now.getTime()), "Period 7"]);

        now.setHours(14);
        now.setMinutes(32);
        schedule.push([new Date(now.getTime()), "Passing Period (7->Assembly)"]);

        now.setHours(14);
        now.setMinutes(37);
        schedule.push([new Date(now.getTime()), "Assembly"]);

        now.setHours(15);
        now.setMinutes(35);
        schedule.push([new Date(now.getTime()), offDuty]);
        break;
    }
    case (6): { // Saturday
        // No schedule here. Special edge case.
        break;
    }
}

let prevTarget;

let updateSchedule = function () {
    now = new Date();
    let isDone = false;
    let i = 0;

    schedule.forEach(function (element) {
        if (isDone) {
            return;
        }

        if (now < element[0]) {
            isDone = true;
            nextDisp.textContent = element[1];
            setTarget(element[0]);

            if (prevTarget !== element[0]) {
                bellSound.play();
            }

            prevTarget = element[0];
            return;
        }

        i++;
    });

    if (i > 0 && !(i === schedule.length)) {
        periodDisp.textContent = schedule[i - 1][1];
    } else {
        periodDisp = offDuty;
    }

    if (!isDone) {
        if (now.getDay() === 2) {
            schoolsOut(1, 8, 0, "OH by Appt.");
        } else {
            schoolsOut(1, 8, 5, "Period 1");
        }
    }
};


setInterval(function () {
    now = new Date();

    switch (now.getDay()) {
        case (0): { // Sunday
            schoolsOut(1, 8, 5, "Period 1");
            break;
        }
        case (6): { // Saturday
            schoolsOut(2, 8, 5, "Period 1");
            break;
        }
        default: {
            updateSchedule();
            break;
        }
    }

}, 250);
