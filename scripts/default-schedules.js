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
            return "Passing Period (?->1)~[SA]~08~[SA]~00~[SE]~Period 1~[SA]~08~[SA]~05~[SE]~Passing Period (1->2)~[SA]~08~[SA]~46~[SE]~Period 2~[SA]~08~[SA]~51~[SE]~Break~[SA]~09~[SA]~32~[SE]~Passing Period (Break->3)~[SA]~09~[SA]~42~[SE]~Period 4~[SA]~10~[SA]~33~[SE]~L1~[SA]~11~[SA]~14~[SE]~L2~[SA]~11~[SA]~44~[SE]~Passing Period (L2->5)~[SA]~12~[SA]~14~[SE]~Period 5~[SA]~12~[SA]~19~[SE]~Passing Period (5->6)~[SA]~13~[SA]~00~[SE]~Period 6~[SA]~13~[SA]~05~[SE]~Passing Period (6->7)~[SA]~13~[SA]~46~[SE]~Period 7~[SA]~13~[SA]~51~[SE]~Passing Period (7->Assembly)~[SA]~14~[SA]~32~[SE]~Assembly~[SA]~14~[SA]~37~[SE]~Free Time~[SA]~15~[SA]~35";
        case 6:
            return "off_duty";
    }
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

