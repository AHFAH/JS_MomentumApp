const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

const chImage = images[Math.floor(Math.random() * images.length)];
const wrap = document.querySelector("div #wrap-img");

const bgImage = document.createElement("img");

bgImage.src = `img/${chImage}`;
bgImage.alt = "background";

wrap.appendChild(bgImage);