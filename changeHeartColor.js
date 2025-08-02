let colorPicker;
const defaultColor = "#8B0000";

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#color-picker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.select();
}

function updateFirst(event) {
    const heart = document.getElementsByTagName("h1")[0];
    if (heart) {
        heart.style.color = event.target.value;
    }
}


