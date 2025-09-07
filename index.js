/* ============================================================
   Duncan M Kahindi — SPA Portfolio (vanilla JS)
   - Matrix background (toggle/paused on detail views)
   - Simple hash router (#/home, #/projects, #/writeups, #/blog, #/contact)
   - Markdown detail rendering via marked.parse()
   - Accessible show/hide with aria-hidden + inert
   ------------------------------------------------------------
   HOW TO ADD/EDIT CONTENT:
   1) Add/modify entries in PROJECTS and WRITEUPS arrays below.
      - title: shown on card and detail top
      - md: relative path to markdown file (e.g., 'projects/project12.md')
      - git: repository URL to open in new tab (do not show raw URL in HTML)
      - desc: short sentence for the card
   2) Create the markdown file in /projects or /writeups with the same name.
   3) Images referenced in markdown should live in /images (e.g., /images/project12.png).
   ============================================================ */

/* ---------- Constants & Helpers ---------- */

// External URLs (hidden behind buttons to avoid raw URLs in markup)
const URLS = {
  gmailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=duncanmaganga10@gmail.com&su=Hello%20Duncan",
  mailto: "mailto:duncanmaganga10@gmail.com",
  medium: "https://medium.com/@duncanmaganga10",
  linkedin: "https://www.linkedin.com/in/duncanmaganga10",
  twitter: "https://twitter.com/duncanmaganga10",
  github: "https://github.com/Duncan-Maganga"
};

// Safe external opener (ensures target=_blank + rel=noopener noreferrer)
function openExternal(url){
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  // Avoid exposing the raw URL text anywhere visible.
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/* ---------- Metadata: Projects (50) ---------- */
// First 4 must be exact as requested. 5–50 use placeholders.
const PROJECTS = [
  { id:1, title:"Phishing-Simulation-with-GoPhish", md:"projects/project1.md",  git:"https://github.com/Duncan-Maganga/Phishing-Simulation-with-GoPhish", desc:"Campaign design, delivery, and reporting with GoPhish." },
  { id:2, title:"Web Application Vulnerability Assessment Report", md:"projects/project2.md",  git:"https://github.com/Duncan-Maganga/FUTURE_CS_001", desc:"Systematic web app assessment and remediation plan." },
  { id:3, title:"Incident Response Simulation Report", md:"projects/project3.md",  git:"https://github.com/Duncan-Maganga/FUTURE_CS_02", desc:"Tabletop IR with containment and lessons learned." },
  { id:4, title:"Secure File Sharing System", md:"projects/project4.md",  git:"https://github.com/Duncan-Maganga/FUTURE_CS_003", desc:"Encrypted sharing workflow with role-based access." },
  // 5–50 placeholders
  ...Array.from({length:46}, (_,i) => {
    const n = i + 5;
    return {
      id:n,
      title:`Project ${n}`,
      md:`projects/project${n}.md`,
      git:`https://github.com/Duncan-Maganga/project-${n}`,
      desc:"Placeholder project — replace with a real description."
    };
  })
];

/* ---------- Metadata: Writeups (50) ---------- */
// First 2 must be exact as requested. 3–50 placeholders.
const WRITEUPS = [
  { id:1, title:"Understanding-SMB-What-It-Is-How-It-Works-and-Why-It-Matters", md:"writeups/writeup1.md", git:"https://github.com/Duncan-Maganga/Understanding-SMB-What-It-Is-How-It-Works-and-Why-It-Matters", desc:"Explainer: SMB protocol fundamentals and security." },
  { id:2, title:"Suricata lab demo", md:"writeups/writeup2.md", git:"https://github.com/Duncan-Maganga/Suricata", desc:"IDS rules, alerts, and packet inspection demo." },
  // 3–50 placeholders
  ...Array.from({length:48}, (_,i) => {
    const n = i + 3;
    return {
      id:n,
      title:`Writeup ${n}`,
      md:`writeups/writeup${n}.md`,
      git:`https://github.com/Duncan-Maganga/writeup-${n}`,
      desc:"Placeholder writeup — swap in your detailed notes."
    };
  })
];

/* ---------- DOM References ---------- */
const views = {
  home: document.getElementById('view-home'),
  projects: document.getElementById('view-projects'),
  projectDetail: document.getElementById('view-project-detail'),
  writeups: document.getElementById('view-writeups'),
  writeupDetail: document.getElementById('view-writeup-detail'),
  blog: document.getElementById('view-blog'),
  contact: document.getElementById('view-contact')
};
const grids = {
  projects: document.getElementById('projectsGrid'),
  writeups: document.getElementById('writeupsGrid')
};
const projectDetailEl = document.getElementById('projectDetail');
const writeupDetailEl = document.getElementById('writeupDetail');
const btnBackProjects = document.getElementById('btnBackProjects');
const btnBackWriteups = document.getElementById('btnBackWriteups');
const btnOpenProjectGit = document.getElementById('btnOpenProjectGit');
const btnOpenWriteupGit = document.getElementById('btnOpenWriteupGit');
const matrixCanvas = document.getElementById('matrix');

/* ---------- Navigation (header) ---------- */
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');
menuToggle.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
// Tab buttons
document.querySelectorAll('.tablink').forEach(btn=>{
  btn.addEventListener('click', ()=> navigate(btn.dataset.route));
});

/* ---------- Social buttons (hide raw URLs) ---------- */
document.querySelectorAll('[data-social]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const key = btn.getAttribute('data-social');
    if (URLS[key]) openExternal(URLS[key]);
  });
});

/* ---------- CTA Buttons ---------- */
document.getElementById('btnEmailHome').addEventListener('click', ()=> {
  openExternal(URLS.gmailCompose);
});
document.getElementById('btnBlogHome').addEventListener('click', ()=> {
  openExternal(URLS.medium);
});
document.getElementById('btnEmailContact').addEventListener('click', ()=> {
  openExternal(URLS.gmailCompose);
});
document.getElementById('btnMailtoFallback').addEventListener('click', ()=> {
  openExternal(URLS.mailto);
});
document.getElementById('btnBlogTab').addEventListener('click', ()=> {
  openExternal(URLS.medium);
});

/* ---------- Router ---------- */
function navigate(hash){
  if (!hash) hash = location.hash || '#/home';
  if (hash === '#/blog') {
    // Open Medium in a new tab but still show the blog CTA view.
    openExternal(URLS.medium);
    showView('blog');
  } else if (hash.startsWith('#/projects/')) {
    // Detail route: #/projects/ID
    const id = parseInt(hash.split('/')[2], 10);
    openProjectDetail(id);
  } else if (hash.startsWith('#/writeups/')) {
    const id = parseInt(hash.split('/')[2], 10);
    openWriteupDetail(id);
  } else if (hash === '#/projects') {
    showView('projects');
  } else if (hash === '#/writeups') {
    showView('writeups');
  } else if (hash === '#/contact') {
    showView('contact');
  } else {
    showView('home');
  }
  // Highlight active tab
  document.querySelectorAll('.tablink').forEach(b=>{
    b.classList.toggle('active', b.dataset.route === hash || (hash.startsWith('#/projects/') && b.dataset.route==="#/projects") || (hash.startsWith('#/writeups/') && b.dataset.route==="#/writeups"));
  });
  // Close mobile nav after navigation
  primaryNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded','false');
}

window.addEventListener('hashchange', ()=> navigate(location.hash));
window.addEventListener('load', ()=> {
  renderLists();
  navigate(location.hash);
});

/* ---------- View Management & Accessibility ---------- */
function setHidden(el, hidden){
  el.setAttribute('aria-hidden', hidden ? 'true' : 'false');
  if (hidden) {
    el.setAttribute('inert','');
    el.classList.remove('active');
  } else {
    el.removeAttribute('inert');
    el.classList.add('active');
  }
}

function showView(name){
  // List pages show matrix; detail pages hide matrix
  const isDetail = (name === 'projectDetail' || name === 'writeupDetail');
  toggleMatrix(!isDetail);

  // Hide all, show one
  Object.entries(views).forEach(([key, section])=>{
    setHidden(section, key !== name);
  });

  // Focus first heading in the shown view for accessibility
  const h2 = views[name].querySelector('h2, h1');
  if (h2) h2.focus?.();
}

/* ---------- Render Lists ---------- */
function renderLists(){
  // Projects
  grids.projects.innerHTML = '';
  PROJECTS.forEach(p=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role','listitem');
    card.innerHTML = `
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.desc)}</p>
      <div class="actions">
        <button class="btn outline" data-git="${p.id}" aria-label="Open project on GitHub">Git</button>
        <button class="btn primary" data-view="${p.id}" aria-label="View project details">View</button>
      </div>
    `;
    // Bind actions without exposing raw URLs
    card.querySelector('[data-git]').addEventListener('click', ()=> openExternal(p.git));
    card.querySelector('[data-view]').addEventListener('click', ()=> {
      location.hash = `#/projects/${p.id}`;
    });
    grids.projects.appendChild(card);
  });

  // Writeups
  grids.writeups.innerHTML = '';
  WRITEUPS.forEach(w=>{
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role','listitem');
    card.innerHTML = `
      <h3>${escapeHtml(w.title)}</h3>
      <p>${escapeHtml(w.desc)}</p>
      <div class="actions">
        <button class="btn outline" data-git="${w.id}" aria-label="Open writeup on GitHub">Git</button>
        <button class="btn primary" data-view="${w.id}" aria-label="View writeup details">View</button>
      </div>
    `;
    card.querySelector('[data-git]').addEventListener('click', ()=> openExternal(w.git));
    card.querySelector('[data-view]').addEventListener('click', ()=> {
      location.hash = `#/writeups/${w.id}`;
    });
    grids.writeups.appendChild(card);
  });
}

/* ---------- Detail Views (Markdown) ---------- */
let currentProjectGit = null;
let currentWriteupGit = null;

async function openProjectDetail(id){
  const p = PROJECTS.find(x=>x.id===id);
  if (!p) return showView('projects');
  currentProjectGit = p.git;
  btnOpenProjectGit.onclick = ()=> openExternal(currentProjectGit);

  try{
    const md = await fetch(p.md, {cache:'no-store'}).then(r=>r.text());
    projectDetailEl.innerHTML = marked.parse(md);
  }catch(e){
    projectDetailEl.innerHTML = `<p>Failed to load markdown for this project. Ensure <code>${escapeHtml(p.md)}</code> exists.</p>`;
  }
  showView('projectDetail');
}

async function openWriteupDetail(id){
  const w = WRITEUPS.find(x=>x.id===id);
  if (!w) return showView('writeups');
  currentWriteupGit = w.git;
  btnOpenWriteupGit.onclick = ()=> openExternal(currentWriteupGit);

  try{
    const md = await fetch(w.md, {cache:'no-store'}).then(r=>r.text());
    writeupDetailEl.innerHTML = marked.parse(md);
  }catch(e){
    writeupDetailEl.innerHTML = `<p>Failed to load markdown for this writeup. Ensure <code>${escapeHtml(w.md)}</code> exists.</p>`;
  }
  showView('writeupDetail');
}

btnBackProjects.addEventListener('click', ()=> navigate('#/projects'));
btnBackWriteups.addEventListener('click', ()=> navigate('#/writeups'));

/* ---------- Matrix Animation ---------- */
let matrixCtx, matrixWidth, matrixHeight, matrixCols, matrixFontSize, matrixDrops, rafId=null;

function initMatrix(){
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  matrixWidth = window.innerWidth;
  matrixHeight = window.innerHeight;
  // Responsive font size & cols
  matrixFontSize = matrixWidth < 560 ? 12 : (matrixWidth < 960 ? 14 : 16);
  matrixCanvas.width = matrixWidth * dpr;
  matrixCanvas.height = matrixHeight * dpr;
  matrixCanvas.style.width = matrixWidth + 'px';
  matrixCanvas.style.height = matrixHeight + 'px';
  matrixCtx = matrixCanvas.getContext('2d');
  matrixCtx.scale(dpr, dpr);

  matrixCols = Math.floor(matrixWidth / matrixFontSize);
  matrixDrops = Array(matrixCols).fill(1 + Math.floor(Math.random()*20));
}

const matrixChars = '0123456789';
function drawMatrix(){
  // Fade effect
  matrixCtx.fillStyle = 'rgba(10,25,47,0.08)';
  matrixCtx.fillRect(0,0,matrixWidth,matrixHeight);

  matrixCtx.fillStyle = '#64ffda';
  matrixCtx.font = `${matrixFontSize}px monospace`;

  for (let i=0;i<matrixDrops.length;i++){
    const text = matrixChars[Math.floor(Math.random()*matrixChars.length)];
    const x = i * matrixFontSize;
    const y = matrixDrops[i] * matrixFontSize;
    matrixCtx.fillText(text, x, y);

    if (y > matrixHeight && Math.random() > 0.975) {
      matrixDrops[i] = 0;
    }
    matrixDrops[i]++;
  }
  rafId = requestAnimationFrame(drawMatrix);
}

function startMatrix(){
  if (rafId) return;
  initMatrix();
  rafId = requestAnimationFrame(drawMatrix);
}

function stopMatrix(){
  if (rafId){
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

function toggleMatrix(visible){
  // Show canvas on lists; hide on details for readability & perf
  if (visible){
    matrixCanvas.style.display = 'block';
    startMatrix();
  } else {
    matrixCanvas.style.display = 'none';
    stopMatrix();
  }
}

window.addEventListener('resize', ()=>{
  if (!rafId) return; // only if running
  // Throttle: re-init after small timeout
  clearTimeout(window.__matrixResizeTimer);
  window.__matrixResizeTimer = setTimeout(()=> {
    stopMatrix(); startMatrix();
  }, 120);
});

/* ---------- Utilities ---------- */
function escapeHtml(str){
  return String(str)
    .replaceAll('&','&amp;').replaceAll('<','&lt;')
    .replaceAll('>','&gt;').replaceAll('"','&quot;')
    .replaceAll("'","&#39;");
}


