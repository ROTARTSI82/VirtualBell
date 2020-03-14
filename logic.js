let periodDisp = document.getElementById("period-disp");
let timeDisp = document.getElementById("time-disp");
let nextDisp = document.getElementById("next-disp");
let datetimeDisp = document.getElementById("datetime-disp");

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

let setTuesThursSchedule = function () {
    now.setSeconds(0);

    now.setHours(8);
    now.setMinutes(5);
    schedule.push([new Date(now.getTime()), "Period 1"]);

    now.setHours(8);
    now.setMinutes(47);
    schedule.push([new Date(now.getTime()), "Passing Period (1->2)"]);

    now.setHours(8);
    now.setMinutes(52);
    schedule.push([new Date(now.getTime()), "Period 2"]);

    now.setHours(9);
    now.setMinutes(34);
    schedule.push([new Date(now.getTime()), "Break"]);

    now.setHours(9);
    now.setMinutes(47);
    schedule.push([new Date(now.getTime()), "Passing Period (Break->Advisory)"]);

    now.setHours(9);
    now.setMinutes(52);
    schedule.push([new Date(now.getTime()), "Advisory"]);

    now.setHours(10);
    now.setMinutes(10);
    schedule.push([new Date(now.getTime()), "Passing Period (Advisory->3)"]);

    now.setHours(10);
    now.setMinutes(15);
    schedule.push([new Date(now.getTime()), "Period 3"]);

    now.setHours(10);
    now.setMinutes(57);
    schedule.push([new Date(now.getTime()), "Passing Period (3->4)"]);

    now.setHours(11);
    now.setMinutes(2);
    schedule.push([new Date(now.getTime()), "Period 4"]);

    now.setHours(11);
    now.setMinutes(44);
    schedule.push([new Date(now.getTime()), "L1"]);

    now.setHours(12);
    now.setMinutes(14);
    schedule.push([new Date(now.getTime()), "L2"]);

    now.setHours(12);
    now.setMinutes(44);
    schedule.push([new Date(now.getTime()), "Passing Period (L2->5)"]);

    now.setHours(12);
    now.setMinutes(49);
    schedule.push([new Date(now.getTime()), "Period 5"]);

    now.setHours(13);
    now.setMinutes(31);
    schedule.push([new Date(now.getTime()), "Passing Period (5->6)"]);

    now.setHours(13);
    now.setMinutes(36);
    schedule.push([new Date(now.getTime()), "Period 6"]);

    now.setHours(14);
    now.setMinutes(18);
    schedule.push([new Date(now.getTime()), "Passing Period (6->7)"]);

    now.setHours(14);
    now.setMinutes(23);
    schedule.push([new Date(now.getTime()), "Period 7"]);

    now.setHours(15);
    now.setMinutes(5);
    schedule.push([new Date(now.getTime()), "Office Hours"]);

    now.setHours(15);
    now.setMinutes(20);
    schedule.push([new Date(now.getTime()), "Clubs"]);

    now.setHours(15);
    now.setMinutes(35);
    schedule.push([new Date(now.getTime()), offDuty]);
};

let loadSchedule = function () {
    switch (now.getDay()) {
        case (0): { // Sunday
            // No schedule here. Special edge case.
            break;
        }
        case (1): { // Monday
            now.setSeconds(0);

            now.setHours(8);
            now.setMinutes(5);
            schedule.push([new Date(now.getTime()), "Period 1"]);

            now.setHours(8);
            now.setMinutes(47);
            schedule.push([new Date(now.getTime()), "Passing Period (1->2)"]);

            now.setHours(8);
            now.setMinutes(52);
            schedule.push([new Date(now.getTime()), "Period 2"]);

            now.setHours(9);
            now.setMinutes(34);
            schedule.push([new Date(now.getTime()), "Passing Period (2->Meeting)"]);

            now.setHours(9);
            now.setMinutes(39);
            schedule.push([new Date(now.getTime()), "Meeting"]);

            now.setHours(9);
            now.setMinutes(59);
            schedule.push([new Date(now.getTime()), "Break"]);

            now.setHours(10);
            now.setMinutes(10);
            schedule.push([new Date(now.getTime()), "Passing Period (Break->3)"]);

            now.setHours(10);
            now.setMinutes(15);
            schedule.push([new Date(now.getTime()), "Period 3"]);

            now.setHours(10);
            now.setMinutes(57);
            schedule.push([new Date(now.getTime()), "Passing Period (3->4)"]);

            now.setHours(11);
            now.setMinutes(2);
            schedule.push([new Date(now.getTime()), "Period 4"]);

            now.setHours(11);
            now.setMinutes(44);
            schedule.push([new Date(now.getTime()), "L1"]);

            now.setHours(12);
            now.setMinutes(14);
            schedule.push([new Date(now.getTime()), "L2"]);

            now.setHours(12);
            now.setMinutes(44);
            schedule.push([new Date(now.getTime()), "Passing Period (L2->5)"]);

            now.setHours(12);
            now.setMinutes(49);
            schedule.push([new Date(now.getTime()), "Period 5"]);

            now.setHours(13);
            now.setMinutes(31);
            schedule.push([new Date(now.getTime()), "Passing Period (5->6)"]);

            now.setHours(13);
            now.setMinutes(36);
            schedule.push([new Date(now.getTime()), "Period 6"]);

            now.setHours(14);
            now.setMinutes(18);
            schedule.push([new Date(now.getTime()), "Passing Period (6->7)"]);

            now.setHours(14);
            now.setMinutes(23);
            schedule.push([new Date(now.getTime()), "Period 7"]);

            now.setHours(15);
            now.setMinutes(5);
            schedule.push([new Date(now.getTime()), "Office Hours"]);

            now.setHours(15);
            now.setMinutes(35);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setDate(now.getDate() + 1);
            now.setHours(8);
            now.setMinutes(5);
            schedule.push([new Date(now.getTime()), "Period 1"]);

            break;
        }
        case (2): { // Tuesday
            setTuesThursSchedule();

            now.setDate(now.getDate() + 1);
            now.setHours(8);
            now.setMinutes(0);
            schedule.push([new Date(now.getTime()), "OH by Appt."]);
            break;
        }
        case (3): { // Wednesday
            now.setSeconds(0);

            now.setHours(8);
            now.setMinutes(0);
            schedule.push([new Date(now.getTime()), "OH by Appt."]);

            now.setHours(8);
            now.setMinutes(25);
            schedule.push([new Date(now.getTime()), "Passing Period (???->1)"]);

            now.setHours(8);
            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "Period 1"]);

            now.setHours(9);
            now.setMinutes(12);
            schedule.push([new Date(now.getTime()), "Passing Period (1->2)"]);

            now.setHours(9);
            now.setMinutes(17);
            schedule.push([new Date(now.getTime()), "Period 2"]);

            now.setHours(9);
            now.setMinutes(59);
            schedule.push([new Date(now.getTime()), "Break"]);

            now.setHours(10);
            now.setMinutes(10);
            schedule.push([new Date(now.getTime()), "Passing Period (Break->3)"]);

            now.setHours(10);
            now.setMinutes(15);
            schedule.push([new Date(now.getTime()), "Period 3"]);

            now.setHours(10);
            now.setMinutes(57);
            schedule.push([new Date(now.getTime()), "Passing Period (3->4)"]);

            now.setHours(11);
            now.setMinutes(2);
            schedule.push([new Date(now.getTime()), "Period 4"]);

            now.setHours(11);
            now.setMinutes(44);
            schedule.push([new Date(now.getTime()), "L1"]);

            now.setHours(12);
            now.setMinutes(14);
            schedule.push([new Date(now.getTime()), "L2"]);

            now.setHours(12);
            now.setMinutes(44);
            schedule.push([new Date(now.getTime()), "Passing Period (L2->5)"]);

            now.setHours(12);
            now.setMinutes(49);
            schedule.push([new Date(now.getTime()), "Period 5"]);

            now.setHours(13);
            now.setMinutes(31);
            schedule.push([new Date(now.getTime()), "Passing Period (5->6)"]);

            now.setHours(13);
            now.setMinutes(36);
            schedule.push([new Date(now.getTime()), "Period 6"]);

            now.setHours(14);
            now.setMinutes(18);
            schedule.push([new Date(now.getTime()), "Passing Period (6->7)"]);

            now.setHours(14);
            now.setMinutes(23);
            schedule.push([new Date(now.getTime()), "Period 7"]);

            now.setHours(15);
            now.setMinutes(5);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setDate(now.getDate() + 1);
            now.setHours(8);
            now.setMinutes(5);
            schedule.push([new Date(now.getTime()), "Period 1"]);
            break;
        }
        case (4): { // Thursday
            setTuesThursSchedule();

            now.setDate(now.getDate() + 1);
            now.setHours(8);
            now.setMinutes(5);
            schedule.push([new Date(now.getTime()), "Period 1"]);
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

            now.setDate(now.getDate() + 3);
            now.setHours(8);
            now.setMinutes(5);
            schedule.push([new Date(now.getTime()), "Period 1"]);

            break;
        }
        case (6): { // Saturday
            // No schedule here. Special edge case.
            break;
        }
    }
};

loadSchedule();

let prevTarget;

let updateSchedule = function () {
    now = new Date();
    let isDone = false;
    let i = 0;

    periodDisp.textContent = offDuty;

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
        } else {
            i++;
        }
    });
    if (i > 0 && !(i === schedule.length)) {
        periodDisp.textContent = schedule[i - 1][1];
    }
};

now = new Date();
let currentDay = now.getDate();

let updateInterval;

let intervalHandler = function () {
    now = new Date();
    datetimeDisp.textContent = now;

    if (currentDay !== now.getDate()) {
        schedule = [];
        loadSchedule();
        location.reload(); // It's a new day! We need to reload the schedule.
        clearInterval(updateInterval);
        updateInterval = setInterval(intervalHandler, 250);
    }

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

};

updateInterval = setInterval(intervalHandler, 250);
