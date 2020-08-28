let loadSchedule = function () {
    ///////////////////////////////////////////
    now = new Date();
    now.setSeconds(0);
    now.setMilliseconds(0);

    let td = getDayStr(now.getDay());

    if (localStorage.getItem(td + "-schedule") !== null) {
        let sched = localStorage.getItem(td + "-schedule");
        // alert(sched);
        if (sched === "off_duty" || !sched) {
            // pass through
        } else {
            let items = sched.split("~[SE]~");
            for (let i = 0; i < items.length; i++) {
                let args = items[i].split("~[SA]~");
                now.setHours(parseInt(args[1], 10));
                now.setMinutes(parseInt(args[2], 10));

                schedule.push([new Date(now.getTime()), args[0]]);
            }
        }
    } else {
        localStorage.setItem(td + "-schedule", getDefaultSched(new Date().getDay()));
        loadSchedule();
    }

    let dn = new Date().getDay();
    let fut = 1;
    for (let i = new Date().getDay() + 1; i !== dn; i++) {
        if (i > 6) {
            i = 0;
        }

        let ndName = getDayStr(i);
        if (localStorage.getItem(ndName + "-schedule") === null) {
            localStorage.setItem(ndName + "-schedule", getDefaultSched(i));

        }

        let sched = localStorage.getItem(ndName + "-schedule");
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
