document.addEventListener("DOMContentLoaded", () => {

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const heartsContainer = document.getElementById("hearts-container");

  // ❤️ Flying hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";

    const emojis = ["❤️", "💖", "💕", "💘"];
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 2 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }

  setInterval(createHeart, 400);

  // YES
  yesBtn.addEventListener("click", () => {
    document.querySelector(".card").innerHTML = `
      <h1>YAYYYY MUMU 💖🥰</h1>
      <p>You just made me the happiest person alive 😘❤️</p>
    `;
  });

  // NO
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.left = Math.random() * 300 + "px";
    noBtn.style.top = Math.random() * 200 + "px";
  });

});