// localStorage.clear();

resetAllScheds(); // TODO: SPECIAL SCHEDULE

let custBody = document.getElementById("schedule-custom-body");
let dayDispBtn = document.getElementById("disp-day-btn");
let dayDispTop = document.getElementById("disp-day");
let dayDispBtn2 = document.getElementById("disp-day-btn2");

let rowHtml =
    "                <th scope=\"row\"><input class=\"form-control\" placeholder=\"Event Name\" type=\"text\"></th>\n" +
    "                <td><input class=\"form-control\" placeholder=\"Start Time\" type=\"time\"></td>\n" +
    "                <td>\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-sm\">\n" +
    "                            <button type=\"button\" class=\"btn btn-danger\" onclick=\"this.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode);\">Delete</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm\">\n" +
    "                            <button type=\"button\" class=\"btn btn-primary\" onclick=\"swapSiblings(this.parentNode.parentNode.parentNode.parentNode.previousSibling, this.parentNode.parentNode.parentNode.parentNode);\">Up &uparrow;</button>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-sm\">\n" +
    "                            <button type=\"button\" class=\"btn btn-primary\" onclick=\"swapSiblings(this.parentNode.parentNode.parentNode.parentNode, this.parentNode.parentNode.parentNode.parentNode.nextSibling);\">Down &downarrow;</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </td>\n";

let targetedDay = new Date().getDay();
let nextDay = function() {
    if (!saveCustomSched(false)) {
        return; // can't save schedule, so don't do it
    }

    targetedDay++;
    if (targetedDay > 6) {
        targetedDay = 0;
    }
    dayDispBtn.innerText = getDayStr(targetedDay);
    dayDispBtn2.innerText = getDayStr(targetedDay);
    dayDispTop.innerText = getDayStr(targetedDay);

    updateDisplayedSched();
}
let prevDay = function() {
    if (!saveCustomSched(false)) {
        return; // can't save schedule :[
    }

    targetedDay--;
    if (targetedDay < 0) {
        targetedDay = 6;
    }
    dayDispBtn.innerText = getDayStr(targetedDay);
    dayDispBtn2.innerText = getDayStr(targetedDay);
    dayDispTop.innerText = getDayStr(targetedDay);

    updateDisplayedSched();
}
let saveCustomSched = function(b) {
    if (custBody.children.length <= 0) {
        localStorage.setItem(getDayStr(targetedDay) + "-schedule", "off_duty");
        if (b) { $('#saved').modal('show'); }
        return true;
    }

    let save = "";
    let lastTime = "";
    for (let i of custBody.children) {
        if (!/^[0-9]+:[0-9]+$/g.test(i.children[1].firstElementChild.value)) {
            $('#cantSave').modal('show');
            return false;
        }

        if (!(i.children[1].firstElementChild.value > lastTime)) {
            $('#eventLater').modal('show');
            return false;
        }
        lastTime = i.children[1].firstElementChild.value;

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
    if (b) { $('#saved').modal('show'); }
    return true;
}

let updateDisplayedSched = function() {

    custBody.innerHTML = "";
    let day = getDayStr(targetedDay);

    let motd = localStorage.getItem(day + "-motd");
    if (motd !== null) {
        document.getElementById('motd').value = motd;
    } else {
        document.getElementById('motd').value = getDefaultMotd(targetedDay);
    }

    if (localStorage.getItem(day + "-schedule") !== null) {
        let sched = localStorage.getItem(day + "-schedule");
        if (sched === "off_duty" || !sched) {
            return;
        }

        let items = sched.split("~[SE]~");
        for (let i = 0; i < items.length; i++) {
            custBody.innerHTML += "<tr>" + rowHtml + "</tr>";
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

dayDispBtn.innerText = getDayStr(targetedDay);
dayDispBtn2.innerText = getDayStr(targetedDay);
dayDispTop.innerText = getDayStr(targetedDay);
updateDisplayedSched();

// Insert s2 before s1
let swapSiblings = function(s1, s2) {
    if (s2 === null) {
        $('#noMovedown').modal('show');
        return;
    }
    if (s1 === null) {
        $('#noMoveup').modal('show');
        return;
    }


    s1.parentNode.insertBefore(s2, s1);
}

let addRow = function() {
    let nr = document.createElement("tr");
    nr.innerHTML = rowHtml;
    custBody.appendChild(nr);
}

