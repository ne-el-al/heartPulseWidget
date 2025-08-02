let intervalId;
function changeColor() {
    intervalId ??= setInterval(pulse, 1000);
}

function pulse() {
    const heart = document.getElementsByTagName("h1")[0];
    heart.style.fontSize = heart.style.fontSize === "100px" ? "80px" : "100px";
}

changeColor();
