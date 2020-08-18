// localStorage.clear();

let custBody = document.getElementById("schedule-custom-body");
let dayDispBtn = document.getElementById("disp-day-btn");
let dayDispTop = document.getElementById("disp-day");

let rowHtml = "<tr>\n" +
    "                <th scope=\"row\"><input class=\"form-control\" placeholder=\"Event Name\" type=\"text\"></th>\n" +
    "                <td><input class=\"form-control\" placeholder=\"Start Time\" type=\"time\"></td>\n" +
    "                <td>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm\">\n" +
    "                            <button type=\"button\" class=\"btn btn-danger\" onclick=\"this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode);\">Delete</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm\">\n" +
    "                            <button type=\"button\" class=\"btn btn-primary\" onclick=\"swapSiblings(this.parentNode.parentNode.parentNode.parentNode, this.parentNode.parentNode.parentNode.parentNode.previousSibling);\">Up &uparrow;</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm\">\n" +
    "                            <button type=\"button\" class=\"btn btn-primary\" onclick=\"swapSiblings(this.parentNode.parentNode.parentNode.parentNode, this.parentNode.parentNode.parentNode.parentNode.nextSibling);\">Down &downarrow;</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </td>\n" +
    "            </tr>";

let getDefaultSched = function(d) {
    switch (d) {
        case 0:
            return "off_duty";
        case 1:
            return "Passing Period (?->1)~[SA]~08~[SA]~00~[SE]~Period 1~[SA]~08~[SA]~05~[SE]~Passing Period (1->2)~[SA]~08~[SA]~47~[SE]~Period 2~[SA]~08~[SA]~52~[SE]~Passing Period (2->Meeting)~[SA]~09~[SA]~34~[SE]~Meeting~[SA]~09~[SA]~39~[SE]~Break~[SA]~09~[SA]~59~[SE]~Passing Period (Break->3)~[SA]~10~[SA]~10~[SE]~Period 3~[SA]~10~[SA]~15~[SE]~Passing Period (3->4)~[SA]~10~[SA]~57~[SE]~Period 4~[SA]~11~[SA]~02~[SE]~L1~[SA]~11~[SA]~44~[SE]~L2~[SA]~12~[SA]~14~[SE]~Passing Period (L2->5)~[SA]~12~[SA]~44~[SE]~Period 5~[SA]~12~[SA]~49~[SE]~Passing Period (5->6)~[SA]~13~[SA]~31~[SE]~Period 6~[SA]~13~[SA]~36~[SE]~Passing Period (6->7)~[SA]~14~[SA]~18~[SE]~Period 7~[SA]~14~[SA]~23~[SE]~Office Hours~[SA]~15~[SA]~05~[SE]~Free Time~[SA]~15~[SA]~35";
        case 3:
            return "OH by Appt.~[SA]~08~[SA]~00~[SE]~Passing Period (?->1)~[SA]~08~[SA]~25~[SE]~Period 1~[SA]~08~[SA]~30~[SE]~Passing Period (1->2)~[SA]~09~[SA]~12~[SE]~Period 2~[SA]~09~[SA]~17~[SE]~Break~[SA]~09~[SA]~59~[SE]~Passing Period (Break->3)~[SA]~10~[SA]~10~[SE]~Period 3~[SA]~10~[SA]~15~[SE]~Passing Period (3->4)~[SA]~10~[SA]~57~[SE]~Period 4~[SA]~11~[SA]~02~[SE]~L1~[SA]~11~[SA]~44~[SE]~L2~[SA]~12~[SA]~14~[SE]~Passing Period (L2->5)~[SA]~12~[SA]~44~[SE]~Period 5~[SA]~12~[SA]~49~[SE]~Passing Period (5->6)~[SA]~13~[SA]~31~[SE]~Period 6~[SA]~13~[SA]~36~[SE]~Passing Period (6->7)~[SA]~14~[SA]~18~[SE]~Period 7~[SA]~14~[SA]~23~[SE]~Free Time~[SA]~15~[SA]~05";
        case 2:
        case 4:
            return "Passing Period (?->1)~[SA]~08~[SA]~00~[SE]~Period 1~[SA]~08~[SA]~05~[SE]~Passing Period (1->2)~[SA]~08~[SA]~47~[SE]~Period 2~[SA]~08~[SA]~52~[SE]~Break~[SA]~09~[SA]~34~[SE]~Passing Period (Break->Advisory)~[SA]~09~[SA]~47~[SE]~Advisory~[SA]~09~[SA]~52~[SE]~Passing Period (Advisory->3)~[SA]~10~[SA]~10~[SE]~Period 3~[SA]~10~[SA]~15~[SE]~Passing Period (3->4)~[SA]~10~[SA]~57~[SE]~Period 4~[SA]~11~[SA]~02~[SE]~L1~[SA]~11~[SA]~44~[SE]~L2~[SA]~12~[SA]~14~[SE]~Passing Period (L2->5)~[SA]~12~[SA]~44~[SE]~Period 5~[SA]~12~[SA]~49~[SE]~Passing Period (5->6)~[SA]~13~[SA]~31~[SE]~Period 6~[SA]~13~[SA]~36~[SE]~Passing Period (6->7)~[SA]~14~[SA]~18~[SE]~Period 7~[SA]~14~[SA]~23~[SE]~Office Hours~[SA]~15~[SA]~05~[SE]~Clubs~[SA]~15~[SA]~20~[SE]~Free Time~[SA]~15~[SA]~35";
        case 5:
            return "Passing Period (?->1)~[SA]~08~[SA]~00~[SE]~Period 1~[SA]~08~[SA]~50~[SE]~Passing Period (1->2)~[SA]~08~[SA]~46~[SE]~Period 2~[SA]~08~[SA]~51~[SE]~Break~[SA]~09~[SA]~32~[SE]~Passing Period (Break->3)~[SA]~09~[SA]~42~[SE]~Period 4~[SA]~10~[SA]~33~[SE]~L1~[SA]~11~[SA]~14~[SE]~L2~[SA]~11~[SA]~44~[SE]~Passing Period (L2->5)~[SA]~12~[SA]~14~[SE]~Period 5~[SA]~12~[SA]~19~[SE]~Passing Period (5->6)~[SA]~13~[SA]~00~[SE]~Period 6~[SA]~13~[SA]~05~[SE]~Passing Period (6->7)~[SA]~13~[SA]~46~[SE]~Period 7~[SA]~13~[SA]~51~[SE]~Passing Period (7->Assembly)~[SA]~14~[SA]~32~[SE]~Assembly~[SA]~14~[SA]~37~[SE]~Free Time~[SA]~15~[SA]~35";
        case 6:
            return "off_duty";
    }
}

let targetedDay = 0;
let nextDay = function() {
    saveCustomSched();
    targetedDay++;
    if (targetedDay > 6) {
        targetedDay = 0;
    }
    dayDispBtn.innerText = getDayStr(targetedDay);
    dayDispTop.innerText = getDayStr(targetedDay);

    updateDisplayedSched();
}
let prevDay = function() {
    saveCustomSched();
    targetedDay--;
    if (targetedDay < 0) {
        targetedDay = 6;
    }
    dayDispBtn.innerText = getDayStr(targetedDay);
    dayDispTop.innerText = getDayStr(targetedDay);

    updateDisplayedSched();
}
let getDayStr = function(d) {
    switch (d) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "[ERROR: INVALID DAY]";
    }
}

let saveCustomSched = function() {
    if (custBody.children.length <= 0) {
        return;
    }

    let save = "";
    for (let i of custBody.children) {
        if (!/^[0-9]+:[0-9]+$/g.test(i.children[1].firstElementChild.value)) {
            let got = `"${i.children[0].firstElementChild.value}"`;
            alert("Error: Please specify a time for all events or delete events with no time. Got " + got);
            return;
        }

        save += i.children[0].firstElementChild.value;
        save += "~[SA]~";

        let times = i.children[1].firstElementChild.value.split(":");
        save += times[0];
        save += "~[SA]~";
        save += times[1];
        save += "~[SE]~";
    }

    save = save.substr(0, save.length - 6);

    console.log(save);
    localStorage.setItem(getDayStr(targetedDay) + "-schedule", save);
}

let updateDisplayedSched = function() {
    custBody.innerHTML = "";
    let day = getDayStr(targetedDay);

    if (localStorage.getItem(day + "-schedule") !== null) {
        let sched = localStorage.getItem(day + "-schedule");
        if (sched === "off_duty" || !sched) {
            return;
        }

        let items = sched.split("~[SE]~");
        for (let i = 0; i < items.length; i++) {
            custBody.innerHTML += rowHtml;
        }

        for (let i = 0; i < items.length; i++) {
            let args = items[i].split("~[SA]~");

            custBody.children[i].firstElementChild.firstElementChild.value = args[0];
            custBody.children[i].children[1].firstElementChild.value = args[1] + ":" + args[2];
        }
    } else {
        localStorage.setItem(day + "-schedule", getDefaultSched(targetedDay));
        updateDisplayedSched();
    }
}

nextDay(); // Increment to Monday


let swapSiblings = function(s1, s2) {
    let prev1 = s1.previousSibling;
    let prev2 = s2.previousSibling;

    prev1.after(s2);
    prev2.after(s1);
}




