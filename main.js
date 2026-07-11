const btn = document.getElementById("loveBtn");
const box = document.getElementById("messageBox");
const text = document.getElementById("text");

const message = "mohamed ayman❤️";

btn.addEventListener("click", () => {

    box.classList.add("show");
    text.textContent = "";

    let i = 0;

    const typing = setInterval(() => {

        text.textContent += message[i];
        i++;

        if(i === message.length){

            clearInterval(typing);

            
            setTimeout(createHearts,1000);

        }

    },100);

});

function createHearts() {

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 120; i++) {

        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = centerX + "px";
        heart.style.top = centerY + "px";

       
        heart.style.setProperty("--x", (Math.random() - 0.5) * 800 + "px");
        heart.style.setProperty("--y", -(300 + Math.random() * 700) + "px");

        document.body.appendChild(heart);

        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}