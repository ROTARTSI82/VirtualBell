let periodDisp = document.getElementById("period-disp");
let timeDisp = document.getElementById("time-disp");
let nextDisp = document.getElementById("next-disp");
let datetimeDisp = document.getElementById("datetime-disp");
let table = document.getElementById("sched-body");

document.getElementById("noscript").hidden = true;

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

let bellSound = new Audio("bell2.wav");
// bellSound.play();

let setTarget = function (date) {
    now = new Date();
    timeDisp.textContent = getTimeStr(date - now);
};

let now = new Date();
let schedule = [];

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

let getTimeStr = function (ms) {
    let days = Math.floor(ms / 86400000); // days
    let hrs = Math.floor((ms % 86400000) / 3600000); // hours
    let mins = Math.floor(((ms % 86400000) % 3600000) / 60000); // minutes
    let secs = Math.floor((((ms % 86400000) % 3600000) % 60000) / 1000); // Seconds

    let ret;

    if (secs < 10) {
        secs = "0" + secs;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    ret = "" + mins + ":" + secs;
    if (days > 0) {
        ret = "" + days + " days " + hrs + ":" + mins + ":" + secs;
        if (days === 1) {
            ret = "1 day " + hrs + ":" + mins + ":" + secs;
        }
    } else if (hrs > 0) {
        ret = "" + hrs + ":" + mins + ":" + secs;
    }

    return ret;
};

let updateTable = function () {
    now = new Date();
    let i = 0;
    let found = false;

    table.innerHTML = "";

    console.log(schedule);
    schedule.forEach(function (element) {
        if (now < element[0] && !found) {
            found = true;
            if (i > 0) {
                table.innerHTML += "<tr style=\"background: darkgreen\">\n" +
                    "                    <th scope=\"row\">" + schedule[i - 1][1] + "</th>\n" +
                    "                    <td>" + (schedule[i - 1][0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>" + (element[0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>" + getTimeStr(element[0] - schedule[i - 1][0]) + "</td>\n" +
                    "                </tr>\n";
            } else {
                console.log("adding first elem active");
                table.innerHTML += "<tr style=\"background: darkgreen\">\n" +
                    "                    <th scope=\"row\">" + offDuty + "</th>\n" +
                    "                    <td>N/A</td>\n" +
                    "                    <td>" + (element[0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>N/A</td>\n" +
                    "                </tr>\n";
            }
        } else {
            console.log("now is after elem or found");
            if (i > 0) {
                console.log("adding elem not active");
                table.innerHTML += "<tr>\n" +
                    "                    <th scope=\"row\">" + schedule[i - 1][1] + "</th>\n" +
                    "                    <td>" + (schedule[i - 1][0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>" + (element[0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>" + getTimeStr(element[0] - schedule[i - 1][0]) + "</td>\n" +
                    "                </tr>\n";
            } else {
                console.log("adding first elem not active");
                table.innerHTML += "<tr>\n" +
                    "                    <th scope=\"row\">" + offDuty + "</th>\n" +
                    "                    <td>N/A</td>\n" +
                    "                    <td>" + (element[0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>N/A</td>\n" +
                    "                </tr>\n";
            }
        }
        i++;
    });

    if (table.innerHTML === "") {
        table.innerHTML += "<tr>\n" +
            "                    <th scope=\"row\">Nothing to see here!</th>\n" +
            "                    <td>It's the weekend!</td>\n" +
            "                    <td>Go out and do something special ;)</td>\n" +
            "                    <td>Have fun!</td>\n" +
            "                </tr>\n";
    }
};

now = new Date();
let currentDay = now.getDate();

let updateInterval;

let intervalHandler = function () {
    now = new Date();
    datetimeDisp.textContent = now.toLocaleString();

    if (currentDay !== now.getDate()) {
        schedule = [];
        loadSchedule();
        location.reload(); // It's a new day! We need to reload the schedule.
        clearInterval(updateInterval);
        updateInterval = setInterval(intervalHandler, 250);
        currentDay = now.getDate();
    }

    switch (now.getDay()) {
        case (0): { // Sunday
            schoolsOut(1, 8, 5, "Period 1");
            updateTable();
            break;
        }
        case (6): { // Saturday
            schoolsOut(2, 8, 5, "Period 1");
            updateTable();
            break;
        }
        default: {
            updateSchedule();
            updateTable();
            break;
        }
    }

};

updateInterval = setInterval(intervalHandler, 250);
