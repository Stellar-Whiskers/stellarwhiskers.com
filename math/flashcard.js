const form = document.getElementById("form");
const factor = document.getElementById("factor");
const start = document.getElementById("start");
const text = document.getElementById("text")

factor.value = ""

const next = document.getElementById("next");
next.style.visibility = "hidden";

const factor2 = []

while (factor2.length < 12) {
    const idk = Math.ceil(Math.random() * 12)
    console.log(idk)
    if (factor2.includes(idk)) {
        continue
    }else{
        factor2.push(idk)
    }
}

console.log(factor2)

let i = 0

function multiply(event) {
    console.debug("hello world");

    factor.style.visibility = "hidden";
    start.style.visibility = "hidden";
    next.style.visibility = "";

    event.preventDefault();

    if (i < 12) {
        const result = factor.value * factor2 [i]
        text.textContent = `${factor.value} x ${factor2[i]} = ${result}`
    }else{
        next.style.visibility = "hidden";
        text.textContent = `Complete!`
    }
    i++
}

form.addEventListener('submit', multiply);