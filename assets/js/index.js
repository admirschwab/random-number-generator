function zehn() {
    document.getElementById("deineZahl").innerHTML=" Deine Zufallszahl zwischen 1 und 10 ist: "
document.getElementById("output").innerHTML =
Math.floor(Math.random() * 11) + 1;
}

function hundert() {
    document.getElementById("deineZahl").innerHTML=" Deine Zufallszahl zwischen 1 und 100 ist: "
document.getElementById("output").innerHTML =
Math.floor(Math.random() * 101) + 1;
}

function tausend() {
    document.getElementById("deineZahl").innerHTML=" Deine Zufallszahl zwischen 1 und 1000 ist: "
document.getElementById("output").innerHTML =
Math.floor(Math.random() * 1001) + 1;
}