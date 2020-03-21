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
