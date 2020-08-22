
let doLoadCustom = true; // TODO: SPECIAL SCHEDULE

let loadSchedule = function () {
    ///////////////////////////////////////////
    now = new Date();
    now.setSeconds(0);
    now.setMilliseconds(0);

    let td = getDayStr(now.getDay());

    let sched = null;
    if (doLoadCustom) {
        sched = localStorage.getItem(td + "-schedule");
    } else {
        sched = getDefaultSched(new Date().getDay());
    }

    if (sched === null) {
        sched = getDefaultSched(new Date().getDay());
    }

    if (sched !== "off_duty" && sched) {
        let items = sched.split("~[SE]~");
        for (let i = 0; i < items.length; i++) {
            let args = items[i].split("~[SA]~");
            now.setHours(parseInt(args[1], 10));
            now.setMinutes(parseInt(args[2], 10));

            schedule.push([new Date(now.getTime()), args[0]]);
        }
    }

    let dn = new Date().getDay();
    let fut = 1;
    for (let i = new Date().getDay() + 1; i !== dn; i++) {
        if (i > 6) {
            i = 0;
        }

        let ndName = getDayStr(i);

        let sched = null;
        if (doLoadCustom) {
            sched = localStorage.getItem(ndName + "-schedule");

            if (sched === null) {
                sched = getDefaultSched(i);
            }
        } else {
            sched = getDefaultSched(i);
        }

        // alert("NEXT WILL BE ITER SCHED");
        // alert(sched);
        if (sched === "off_duty" || !sched) {
            // pass through
        } else {
            let items = sched.split("~[SE]~");
            if (items.length > 0) {
                let args = items[0].split("~[SA]~");
                now.setDate(now.getDate() + fut);
                now.setHours(parseInt(args[1], 10));
                now.setMinutes(parseInt(args[2], 10));

                schedule.push([new Date(now.getTime()), args[0]]);
                break;
            }
        }

        fut++;
    }
};
