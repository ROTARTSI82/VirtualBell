let saveSched = document.getElementById("save-sched");
let bellSelect = document.getElementById("sound-select");
let saveBell = document.getElementById("save-bell");

if (localStorage.getItem("bellSound") !== null) {
    // Uh, totally didn't ctrl v from StackOverflow
    document.querySelector("#sound-select option[value='" + localStorage.getItem("bellSound") + "']").setAttribute('selected', true);
}

let previewSound = new Audio();
saveBell.onclick = function () {
    localStorage.setItem("bellSound", bellSelect.options[bellSelect.selectedIndex].value);

    previewSound = new Audio(localStorage.getItem("bellSound"));
    previewSound.play();
};

saveSched.onclick = function () {
    alert("This feature is incomplete, but it will be available in the VERY NEAR future.");
};
