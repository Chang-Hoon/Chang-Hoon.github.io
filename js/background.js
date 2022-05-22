const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// bgImage.style.backgroundSize = "cover";
// document.body.appendChild(bgImage);
const divTop = document.body.getElementsByTagName("section")[0];
divTop.appendChild(bgImage);