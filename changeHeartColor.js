let colorPicker;
const defaultColor = "#8B0000";
const color = localStorage.getItem('color');

window.addEventListener("load", startup, false);

function startup() {
    colorPicker = document.querySelector("#color-picker");
    if (color) {
        colorPicker.value = color;
        document.getElementsByTagName("h1")[0].style.color = color;
    }
    else {
        colorPicker.value = defaultColor;
    }
    colorPicker.addEventListener("input", updateColor, false);
    colorPicker.select();
}

function updateColor(event) {
    const heart = document.getElementsByTagName("h1")[0];
    if (heart) {
        heart.style.color = event.target.value;
        localStorage.setItem('color', event.target.value);
    }
}