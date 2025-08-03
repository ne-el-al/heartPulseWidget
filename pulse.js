let intervalId;
function changeColor() {
    intervalId ??= setInterval(pulse, 1000);
}

function pulse() {
    const heart = document.getElementsByTagName("h1")[0];
    heart.style.transform = heart.style.transform === "scale(1)" ? "scale(1.3)" : "scale(1)";
}

changeColor();
