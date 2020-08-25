let periodDisp = document.getElementById("period-disp");
let timeDisp = document.getElementById("time-disp");
let nextDisp = document.getElementById("next-disp");
let datetimeDisp = document.getElementById("datetime-disp");
let table = document.getElementById("sched-body");
let linkDisp = document.getElementById("link-disp");
let endDisp = document.getElementById("end-disp");
let noteDisp = document.getElementById("note-disp");

let now = new Date();
let doTroll = now.getDate() === 1 && now.getMonth() === 3;
doTroll |= true;
let origColors = new Map();

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor() {
    let chars = "0123456789abcdef";
    let ret = "#";
    for (let i = 0; i < 6; i++) {
        ret += chars.charAt(getRandomInt(0, 15));
    }
    return ret;
}

document.getElementById("noscript").hidden = true;

let offDuty = "Free Time";

let schoolsOut = function (days, hours, min, next) {
    periodDisp.textContent = offDuty;
    linkDisp.textContent = "No Links";
    nextDisp.textContent = next;

    let nextMonday = new Date();
    nextMonday.setDate(nextMonday.getDate() + days);
    nextMonday.setHours(hours);
    nextMonday.setMinutes(min);
    nextMonday.setSeconds(0);

    setTarget(nextMonday);
};

let bellSound;
if (localStorage.getItem("bellSound") !== null) {
    bellSound = new Audio(localStorage.getItem("bellSound"));
} else {  // Set default bell sound
    bellSound = new Audio("bellSounds/bell2.wav");
}

let troll = null;

if (doTroll) {
    bellSound = new Audio("bellSounds/bellend.mp3");
// bellSound.play();
}

let setTarget = function (date) {
    now = new Date();
    timeDisp.textContent = getTimeStr(date - now);
    endDisp.textContent = date.toLocaleTimeString();
};

let schedule = [];

loadSchedule();

let prevTarget;

let updateSchedule = function () {
    now = new Date();
    let isDone = false;
    let i = 0;

    periodDisp.textContent = offDuty;
    linkDisp.textContent = "No Links";

    schedule.forEach(function (element) {
        if (isDone) {
            return;
        }

        if (now < element[0]) {
            isDone = true;
            nextDisp.textContent = element[1];
            if (localStorage.getItem(nextDisp.textContent + "-name") !== null) {
                nextDisp.textContent = localStorage.getItem(nextDisp.textContent + "-name");
            }

            setTarget(element[0]);

            if (prevTarget !== element[0]) {
                bellSound.play();

                if (troll === null && doTroll) {

                    let all = document.getElementsByTagName("*");
                    for (let i=0, max=all.length; i < max; i++) {
                        origColors.set(all[i], {fg: all[i].style.color, bg: all[i].style.backgroundColor});
                    }

                    troll = setInterval(function () {
                        let all = document.getElementsByTagName("*");

                        for (let i=0, max=all.length; i < max; i++) {
                            all[i].style.color = randomColor();
                            all[i].style.backgroundColor = randomColor();
                        }
                    }, 0);

                    setTimeout(function() {
                        clearInterval(troll);
                        troll = null;

                        bellSound.pause();
                        bellSound.load();

                        let all = document.getElementsByTagName("*");

                        for (let i=0, max=all.length; i < max; i++) {
                            if (origColors.has(all[i])) {
                                all[i].style.color = origColors.get(all[i]).fg;
                                all[i].style.backgroundColor = origColors.get(all[i]).bg;
                            }
                        }

                    }, 5000)
                }
            }
            prevTarget = element[0];
        } else {
            i++;
        }
    });
    if (i > 0 && !(i === schedule.length)) {
        let eventName = schedule[i - 1][1];
        if (localStorage.getItem(eventName + "-name") !== null) {
            eventName = localStorage.getItem(eventName + "-name");
        }

        periodDisp.textContent = eventName;
        linkDisp.innerHTML = getLinkHTML(schedule[i - 1][1]);
    }
};

let getLinkHTML = function (periodName) {

    let linkPack = localStorage.getItem(periodName + "-link");
    if (linkPack !== null) {
        let linkList = linkPack.split(" ");
        let finalHTML = "";

        linkList.forEach(function (element) {
            if (/[A-z]+:\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/g.test(element)) {
                finalHTML += "<a target=\"_blank\" href=\"" + element + "\">" + element + "</a> ";
            } else {
                finalHTML += element + ' ';
            }
        });

        return finalHTML;
    } else {
        if (periodName === "Meeting" || periodName === "Assembly") {
            return "Check <a href='https://schoology.harker.org' target='_blank'>Schoology</a> (Student Notes & Calendar) & <a target='_blank' href='https://gmail.com'>your email</a> & <a target=\"_blank\" href=\"https://docs.google.com/document/d/1sTkxpBtSHVsDVtlZuOgjbVR2ot434qEUplBgEp-nsmc/edit?usp=sharing\">this doc.</a>";
        }

        if (periodName === "L1" || periodName === "L2") {
            return "Check <a href='https://schoology.harker.org' target='_blank'>Schoology</a> for lunchtime activities";
        }

        if (periodName === "Clubs") {
            if (now.getDay() === 2) {
                return "Check <a href='https://schoology.harker.org' target='_blank'>schoology</a> for Tuesday Club Offerings."
            } else if (now.getDay() === 4) {
                return "Check <a href='https://schoology.harker.org' target='_blank'>schoology</a> for Thursday Club Offerings."
            }
        }

        return "No Links";
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

    schedule.forEach(function (element) {
        if (now < element[0] && !found) {
            found = true;
            if (i > 0) {
                let eventName = schedule[i - 1][1];
                if (localStorage.getItem(eventName + "-name") !== null) {
                    eventName = localStorage.getItem(eventName + "-name");
                }

                table.innerHTML += "<tr style=\"background: darkgreen\">\n" +
                    "                    <th scope=\"row\">" + eventName + "</th>\n" +
                    "                    <td>" + getLinkHTML(schedule[i - 1][1]) + "</td>\n" +
                    "                    <td>" + (schedule[i - 1][0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>" + (element[0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>" + getTimeStr(element[0] - schedule[i - 1][0]) + "</td>\n" +
                    "                </tr>\n";
            } else {
                table.innerHTML += "<tr style=\"background: darkgreen\">\n" +
                    "                    <th scope=\"row\">" + offDuty + "</th>\n" +
                    "                    <td>No Links</td>\n" +
                    "                    <td>N/A</td>\n" +
                    "                    <td>" + (element[0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>N/A</td>\n" +
                    "                </tr>\n";
            }
        } else {
            if (i > 0) {
                let eventName = schedule[i - 1][1];
                if (localStorage.getItem(eventName + "-name") !== null) {
                    eventName = localStorage.getItem(eventName + "-name");
                }

                table.innerHTML += "<tr>\n" +
                    "                    <th scope=\"row\">" + eventName + "</th>\n" +
                    "                    <td>" + getLinkHTML(schedule[i - 1][1]) + "</td>\n" +
                    "                    <td>" + (schedule[i - 1][0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>" + (element[0]).toLocaleTimeString() + "</td>\n" +
                    "                    <td>" + getTimeStr(element[0] - schedule[i - 1][0]) + "</td>\n" +
                    "                </tr>\n";
            } else {
                table.innerHTML += "<tr>\n" +
                    "                    <th scope=\"row\">" + offDuty + "</th>\n" +
                    "                    <td>No Links</td>\n" +
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
            "                    <td>Have fun!</td>\n" +
            "                    <td>Remember to wash your hands!</td>\n" +
            "                    <td>Stay healthy!</td>\n" +
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

    noteDisp.textContent = localStorage.getItem(getDayStr(now.getDay()) + "-motd");
    if (!noteDisp.textContent) {
        noteDisp.textContent = getDefaultMotd(now.getDay());
    }

    updateSchedule();
    updateTable();

};

updateInterval = setInterval(intervalHandler, 250);
