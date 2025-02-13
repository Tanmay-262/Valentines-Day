let yesBtn = document.getElementById("yes");
let noBtn = document.getElementById("no");
let gifImage = document.getElementById("gif");
let size = 18; 
let gifIndex = 0;

// List of GIFs in order
let gifLinks = [
    "Resources/gif5.gif",
    "Resources/gif7.gif",
    "Resources/gif6.gif",
    "Resources/gif8.gif",
    "Resources/gif3.gif",
    "Resources/gif2.gif",
];

noBtn.addEventListener("click", growYes);
yesBtn.addEventListener("click", showLove);

function growYes() {
    size += 10; 
    yesBtn.style.fontSize = size + "px";

    if (size >= 100) {
        yesBtn.style.width = "100vw";
        yesBtn.style.height = "100vh";
        yesBtn.style.fontSize = "30px";
        yesBtn.innerHTML = "JUST SAY YES! ❤️";
    }

    changeGif();
}

function changeGif() {
    if (gifIndex < gifLinks.length) {
        gifImage.src = gifLinks[gifIndex];
        gifIndex++;
    }
}

function showLove() {
    document.body.innerHTML = `
        <h1>Yay! 💖 I knew you'd say YES! You're my forever Valentine! 🎉</h1>
        <img src="Resources/gif4.gif" alt="Cute Celebration GIF" width="300px">
    `;

    startHeartAnimation();
}

function startHeartAnimation() {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.fontSize = Math.random() * 30 + 20 + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
