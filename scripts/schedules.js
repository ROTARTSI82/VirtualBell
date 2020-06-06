let loadSchedule = function () {
    now = new Date();
    switch (now.getDay()) {
        case (0): { // Sunday
            // No schedule here. Special edge case.
            break;
        }
        case (1): { // Monday
            /* Period 1:    8:30 am to 9:30 am
        Period 2:    10:00 am to 11:00 am */
            now.setSeconds(0);
            now.setMilliseconds(0);

            now.setHours(8)
            now.setMinutes(25);
            schedule.push([new Date(now.getTime()), "Passing Period (???->1)"]);

            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "Period 1"]);

            now.setHours(9);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setMinutes(55);
            schedule.push([new Date(now.getTime()), "Passing Period (1->2)"]);

            now.setMinutes(0);
            now.setHours(10);
            schedule.push([new Date(now.getTime()), "Period 2"]);

            now.setHours(11);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setDate(now.getDate() + 1);
            now.setHours(8);
            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "Period 3"]);

            break;
        }
        case (2): { // Tuesday
            now.setSeconds(0);
            now.setMilliseconds(0);

            now.setHours(8)
            now.setMinutes(25);
            schedule.push([new Date(now.getTime()), "Passing Period (???->3)"]);

            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "Period 3"]);

            now.setHours(9);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setMinutes(55);
            schedule.push([new Date(now.getTime()), "Passing Period (3->4)"]);

            now.setMinutes(0);
            now.setHours(10);
            schedule.push([new Date(now.getTime()), "Period 4"]);

            now.setHours(11);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setDate(now.getDate() + 1);
            now.setHours(8);
            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "Period 5"]);
            break;
        }
        case (3): { // Wednesday
            now.setSeconds(0);
            now.setMilliseconds(0);

            now.setHours(8)
            now.setMinutes(25);
            schedule.push([new Date(now.getTime()), "Passing Period (???->5)"]);

            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "Period 5"]);

            now.setHours(9);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setMinutes(55);
            schedule.push([new Date(now.getTime()), "Passing Period (5->6)"]);

            now.setMinutes(0);
            now.setHours(10);
            schedule.push([new Date(now.getTime()), "Period 6"]);

            now.setHours(11);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setDate(now.getDate() + 1);
            now.setHours(8);
            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "Period 7"]);
            break;
        }
        case (4): { // Thursday
            now.setSeconds(0);
            now.setMilliseconds(0);

            now.setHours(8)
            now.setMinutes(25);
            schedule.push([new Date(now.getTime()), "Passing Period (???->7)"]);

            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "Period 7"]);

            now.setHours(9);
            schedule.push([new Date(now.getTime()), "Passing Period (7->Closing Gathering)"]);

            now.setMinutes(35);
            schedule.push([new Date(now.getTime()), "Closing Gathering"]);

            now.setMinutes(0);
            now.setHours(10);
            schedule.push([new Date(now.getTime()), "8th Grade Promotion"]);

            now.setHours(11);
            schedule.push([new Date(now.getTime()), offDuty])

            now.setHours(12);
            schedule.push([new Date(now.getTime()), "8th Grade pick up & drop off"])

            now.setHours(15);
            schedule.push([new Date(now.getTime()), offDuty])

            now.setDate(now.getDate() + 1);
            now.setHours(8);
            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "7th Grade pick up & drop off"])

            break;
        }
        case (5): { // Friday
            now.setSeconds(0);
            now.setMilliseconds(0);

            now.setHours(8);
            now.setMinutes(30);
            schedule.push([new Date(now.getTime()), "7th Grade pick up & drop off"]);

            now.setHours(11);
            now.setMinutes(10);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setHours(12);
            now.setMinutes(0);
            schedule.push([new Date(now.getTime()), "6th Grade pick up & drop off"]);

            now.setHours(15);
            now.setMinutes(50);
            schedule.push([new Date(now.getTime()), offDuty]);

            now.setDate(now.getDate() + 1);
            now.setMinutes(0);
            now.setHours(0);
            schedule.push([new Date(now.getTime()), "N/A"]);

            break;
        }
        case (6): { // Saturday
            // No schedule here. Special edge case.
            break;
        }
    }
    now = new Date();
};
