//  read input 
const readInputInput = document.getElementById("readInputInput");
const readInputBlock = document.getElementById("readInputBlock");

readInputInput.addEventListener("change", (event) => {
    // console.log(event.target.value)
    readInputBlock.innerText = 'Hello ' + event.target.value;
})

// delay
const delayBlock = document.getElementById("delayBlock");
// console.log(delayBlock)
setTimeout(() => {
    delayBlock.innerText = 1;
}, 1000);

setInterval(() => {
    delayBlock.innerText = Number(delayBlock.innerText) + 1;
}, 1000);

// fade in
const fadeInBlock = document.getElementById("fadeInBlock");

fadeInBlock.innerHTML = fadeInBlock.innerText
    .split("")
    .map(char => '<span class="fadeIn">' + char + '</span>')
    .join("");


// pulse
const pulseCharsBlock = document.getElementById('pulseCharsBlock');

function getRandomDecimal(min, max) {
  return Math.random() * (max - min) + min;
}

pulseCharsBlock.innerHTML = pulseCharsBlock.innerText
    .split("")
    .map(char => '<span class="pulseChar" style="animation: pulse ' + getRandomDecimal(0.3, 1) +'s ease-in-out infinite;">' + char + '</span>')
    .join("")

// color cycle
const colorCycleBlock = document.getElementById('colorCycleBlock');
const colors = ['red', 'blue', 'green', 'orange', 'purple'];
let colorIndex = 0;

setInterval(() => {
    colorCycleBlock.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

// typewriter
const typewriterBlock = document.getElementById('typewriterBlock');
const text = "JS Animation Demo...";
let charIndex = 0;

function type() {
    if (charIndex < text.length) {
        typewriterBlock.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(() => {
            typewriterBlock.textContent = "";
            charIndex = 0;
            type();
        }, 2000);
    }
}
type();

// floating
const floatingBlock = document.getElementById('floatingBlock');
let start = null;

function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const y = Math.sin(progress / 500) * 20;
    floatingBlock.style.transform = `translateY(${y}px)`;
    requestAnimationFrame(step);
}
requestAnimationFrame(step);
