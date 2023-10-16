const shikSize = 128;

const shikWidth = window.innerWidth / shikSize;
const shikHeight = window.innerHeight / shikSize;

const shikCount = shikWidth * shikHeight;

let output = "";

for(let i = 0; i < shikCount; i++) {
    output += `
        <div class="shik" style="animation-delay: ${i*100}ms"></div>
    `;
}

document.getElementById("shik-bg").innerHTML += output;