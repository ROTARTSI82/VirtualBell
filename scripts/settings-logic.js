let saveSched = document.getElementById("save-sched");
let bellSelect = document.getElementById("sound-select");
let saveBell = document.getElementById("save-bell");

if (localStorage.getItem("bellSound") !== null) {
    // Uh, totally didn't ctrl v from StackOverflow
    document.querySelector("#sound-select option[value='" + localStorage.getItem("bellSound") + "']").setAttribute('selected', true);
}

for (let i = 1; i <= 7; i++) {
    if (localStorage.getItem("Period " + i + "-name") !== null) {
        document.getElementById("per" + i + "-name").value = localStorage.getItem("Period " + i + "-name");
    }

    if (localStorage.getItem("Period " + i + "-link") !== null) {
        document.getElementById("per" + i + "-link").value = localStorage.getItem("Period " + i + "-link");
    }
}

if (localStorage.getItem("Advisory-name") !== null) {
    document.getElementById("adv-name").value = localStorage.getItem("Advisory-name");
}
if (localStorage.getItem("Advisory-link") !== null) {
    document.getElementById("adv-link").value = localStorage.getItem("Advisory-link");
}

let previewSound = new Audio();
saveBell.onclick = function () {
    localStorage.setItem("bellSound", bellSelect.options[bellSelect.selectedIndex].value);

    previewSound = new Audio(localStorage.getItem("bellSound"));
    previewSound.play();
};

saveSched.onclick = function () {
    for (let i = 1; i <= 7; i++) {
        if (document.getElementById("per" + i + "-name").value !== "") {
            localStorage.setItem("Period " + i + "-name", document.getElementById("per" + i + "-name").value);
        }

        if (document.getElementById("per" + i + "-link").value !== "") {
            localStorage.setItem("Period " + i + "-link", document.getElementById("per" + i + "-link").value);
        }
    }

    if (document.getElementById("adv-name").value !== "") {
        localStorage.setItem("Advisory-name", document.getElementById("adv-name").value);
    }

    if (document.getElementById("adv-link").value !== "") {
        localStorage.setItem("Advisory-link", document.getElementById("adv-link").value);
    }
};
