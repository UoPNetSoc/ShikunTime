const shickSize = 128;

const shickWidth = window.innerWidth / shickSize;
const shickHeight = window.innerHeight / shickSize;

const shickCount = shickWidth * shickHeight;

let output = "";

for(let i = 0; i < shickCount; i++) {
    output += `
        <div class="shick" style="animation-delay: ${i*100}ms"></div>
    `;
}

document.getElementById("shick-bg").innerHTML += output;