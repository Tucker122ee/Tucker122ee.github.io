/********* Matrix background *********/
const matrixCanvas = document.getElementById("matrix");
const ctx = matrixCanvas.getContext("2d");

function setCanvasSize() {
  const dpr = window.devicePixelRatio || 1;
  matrixCanvas.width = Math.floor(window.innerWidth * dpr);
  matrixCanvas.height = Math.floor(window.innerHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
}
setCanvasSize();
window.addEventListener("resize", setCanvasSize);

const glyphs = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 14;
let cols = Math.floor(window.innerWidth / fontSize);
let drops = new Array(cols).fill(1);

function draw() {
  // subtle trail
  ctx.fillStyle = "rgba(10,25,47,0.08)";
  ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

  // neon text
  ctx.fillStyle = "#64ffda";
  ctx.font = `${fontSize}px monospace`;

  // adjust columns if width changed
  const newCols = Math.floor(window.innerWidth / fontSize);
  if (newCols !== cols) {
    cols = newCols;
    drops = new Array(cols).fill(1);
  }

  for (let i = 0; i < drops.length; i++) {
    const char = glyphs.charAt(Math.floor(Math.random() * glyphs.length));
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

/********* Projects (edit here to add more later) *********/
const projects = [
  {
    title: "Gophish Simulation",
    description: "Phishing awareness training project.",
    link: "#"
  },
  {
    title: "SOC Automation (n8n)",
    description: "Automated incident response workflows.",
    link: "#"
  },
  {
    title: "Malware Sandbox",
    description: "Custom lab for reversing and detonation.",
    link: "#"
  }
];

const container = document.getElementById("projects");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project";
  card.innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.description}</p>
    ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">View project →</a>` : ""}
  `;
  container.appendChild(card);
});
