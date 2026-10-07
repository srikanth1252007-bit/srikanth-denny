const hearts = document.getElementById("hearts");
const fallingHearts = document.getElementById("fallingHearts");

const colors = [
    "#f4779d",
    "#ff9fba",
    "#f6c85f",
    "#ff789f",
    "#ffd166"
];

/* Create hearts around the tree */

function createTreeHearts() {

    for (let i = 0; i < 150; i++) {

        const heart = document.createElement("span");

        heart.className = "heart";
        heart.innerHTML = "♥";

        const angle = Math.random() * Math.PI * 2;
        const radius = 120 + Math.random() * 120;

        const x = 220 + Math.cos(angle) * radius;
        const y = 230 + Math.sin(angle) * radius * 0.75;

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        heart.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        heart.style.fontSize =
            (14 + Math.random() * 18) + "px";

        heart.style.animationDelay =
            (Math.random() * 4 + 4) + "s";

        hearts.appendChild(heart);
    }
}

createTreeHearts();


/* Falling hearts */

function createFallingHeart() {

    const heart = document.createElement("div");

    heart.className = "falling-heart";
    heart.innerHTML = "♥";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.color =
        colors[Math.floor(Math.random() * colors.length)];

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    fallingHearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createFallingHeart, 500);


/* Click anywhere for extra hearts */

document.addEventListener("click", function(event) {

    for (let i = 0; i < 8; i++) {

        const heart = document.createElement("div");

        heart.className = "falling-heart";
        heart.innerHTML = "♥";

        heart.style.left = event.clientX + "px";
        heart.style.top = event.clientY + "px";

        heart.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        heart.style.animationDuration = "3s";

        fallingHearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
});