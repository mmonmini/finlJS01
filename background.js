const images = ["3.jpeg","4.jpeg", "5.gif",];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.style.position = "fixed";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.objectFit = "cover";
bgImage.style.zIndex = "-2";

document.body.appendChild(bgImage);