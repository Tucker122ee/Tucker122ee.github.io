// Matrix background effect with numbers
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const numbers = "0123456789";   // numbers only
const fontSize = 16;
const columns = canvas.width / fontSize; // number of columns
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  // Black background with slight opacity for trail effect
  ctx.fillStyle = "rgba(10, 25, 47, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#64ffda"; // neon green/teal numbers
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = numbers.charAt(Math.floor(Math.random() * numbers.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 40);
