// Social Media URLs
const socialUrls = {
    linkedin: "https://www.linkedin.com/in/duncan-m-kahindi-cybersecurity/",
    twitter: "https://twitter.com/DuncanMaganga10",
    github: "https://github.com/Duncan-Maganga",
    medium: "https://medium.com/@duncanmaganga10"
};

// Project Metadata (50 projects)
const projects = [
    {
        id: 1,
        title: "Phishing Simulation with GoPhish",
        description: "A comprehensive phishing simulation project using GoPhish to test organizational security awareness.",
        githubUrl: "https://github.com/Duncan-Maganga/Phishing-Simulation-with-GoPhish",
        markdownFile: "projects/project1.md"
    },
    {
        id: 2,
        title: "Web Application Vulnerability Assessment Report",
        description: "Detailed assessment of web application vulnerabilities and recommended remediation strategies.",
        githubUrl: "https://github.com/Duncan-Maganga/FUTURE_CS_001",
        markdownFile: "projects/project2.md"
    },
    {
        id: 3,
        title: "Incident Response Simulation Report",
        description: "Simulated incident response exercise documenting detection, analysis, and containment procedures.",
        githubUrl: "https://github.com/Duncan-Maganga/FUTURE_CS_02",
        markdownFile: "projects/project3.md"
    },
    {
        id: 4,
        title: "Secure File Sharing System",
        description: "A secure system for file sharing with encryption and access control mechanisms.",
        githubUrl: "https://github.com/Duncan-Maganga/FUTURE_CS_003",
        markdownFile: "projects/project4.md"
    },
    // Projects 5-50 with placeholder data
    ...Array.from({ length: 46 }, (_, i) => ({
        id: i + 5,
        title: `Project ${i + 5}`,
        description: `Description for Project ${i + 5}. This is a placeholder project in cybersecurity.`,
        githubUrl: `https://github.com/Duncan-Maganga/project-${i + 5}`,
        markdownFile: `projects/project${i + 5}.md`
    }))
];

// Writeup Metadata (50 writeups)
const writeups = [
   // {
        //id: 1,
        //title: "Understanding SMB: What It Is, How It Works, and Why It Matters",
        //description: "An in-depth exploration of the Server Message Block protocol and its security implications.",
        //githubUrl: "https://github.com/Duncan-Maganga/Understanding-SMB-What-It-Is-How-It-Works-and-Why-It-Matters",
        //markdownFile: "writeups/writeup1.md"
   // },
    {
        id: 2,
        title: "Suricata Lab Demo",
        description: "Hands-on demonstration of Suricata IDS/IPS capabilities in a lab environment.",
        githubUrl: "https://github.com/Duncan-Maganga/Suricata",
        markdownFile: "writeups/writeup2.md"
    },
    // Writeups 3-50 with placeholder data
    ...Array.from({ length: 48 }, (_, i) => ({
        id: i + 3,
        title: `Writeup ${i + 3}`,
        description: `Description for Writeup ${i + 3}. This is a placeholder cybersecurity writeup.`,
        githubUrl: `https://github.com/Duncan-Maganga/writeup-${i + 3}`,
        markdownFile: `writeups/writeup${i + 3}.md`
    }))
];

// DOM Elements
const matrixCanvas = document.getElementById('matrix');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const projectsGrid = document.getElementById('projects-grid');
const writeupsGrid = document.getElementById('writeups-grid');
const markdownContent = document.getElementById('markdown-content');
const backBtn = document.getElementById('back-btn');
const githubBtn = document.getElementById('github-btn');
const contactBtns = document.querySelectorAll('#contact-btn, #contact-btn-2');
const socialLinks = document.querySelectorAll('.social-link');

// Matrix Animation
let matrixCtx = matrixCanvas.getContext('2d');
let matrixAnimationId = null;
let matrixColumns = [];
let matrixFontSize = 14;

function initMatrix() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    
    // Calculate number of columns based on screen width
    const columns = Math.floor(matrixCanvas.width / matrixFontSize);
    matrixColumns = Array(columns).fill(0);
    
    // Set font
    matrixCtx.font = `${matrixFontSize}px monospace`;
}

function drawMatrix() {
    // Semi-transparent black to create trail effect
    matrixCtx.fillStyle = 'rgba(10, 25, 47, 0.05)';
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    // Set green text with varying opacity
    matrixCtx.fillStyle = '#64ffda';
    
    // Draw characters
    matrixColumns.forEach((y, index) => {
        // Random character
        const text = String.fromCharCode(Math.random() * 128);
        
        // Draw character
        const x = index * matrixFontSize;
        matrixCtx.fillText(text, x, y);
        
        // Reset column if reached bottom with random chance
        if (y > matrixCanvas.height && Math.random() > 0.975) {
            matrixColumns[index] = 0;
        } else {
            matrixColumns[index] = y + matrixFontSize;
        }
    });
}

function startMatrix() {
    if (!matrixAnimationId) {
        matrixCanvas.style.display = 'block';
        matrixAnimation();
    }
}

function stopMatrix() {
    if (matrixAnimationId) {
        cancelAnimationFrame(matrixAnimationId);
        matrixAnimationId = null;
    }
    matrixCanvas.style.display = 'none';
}

function matrixAnimation() {
    drawMatrix();
    matrixAnimationId = requestAnimationFrame(matrixAnimation);
}

// Navigation
function switchSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
    
    // Handle matrix visibility
    if (sectionId === 'detail-view') {
        stopMatrix();
    } else {
        startMatrix();
    }
    
    // Close mobile menu if open
    if (navMenu.classList.contains('active')) {
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
    }
}

// Render Project Cards
function renderProjects() {
    projectsGrid.innerHTML = '';
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="card-actions">
                <button class="btn btn-secondary" data-github="${project.githubUrl}">Git</button>
                <button class="btn btn-primary" data-file="${project.markdownFile}" data-github="${project.githubUrl}">View</button>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
    
    // Add event listeners to project buttons
    document.querySelectorAll('#projects-grid .btn').forEach(btn => {
        if (btn.textContent === 'Git') {
            btn.addEventListener('click', () => {
                window.open(btn.getAttribute('data-github'), '_blank', 'noopener,noreferrer');
            });
        } else if (btn.textContent === 'View') {
            btn.addEventListener('click', () => {
                loadMarkdown(btn.getAttribute('data-file'), btn.getAttribute('data-github'));
            });
        }
    });
}

// Render Writeup Cards
function renderWriteups() {
    writeupsGrid.innerHTML = '';
    writeups.forEach(writeup => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${writeup.title}</h3>
            <p>${writeup.description}</p>
            <div class="card-actions">
                <button class="btn btn-secondary" data-github="${writeup.githubUrl}">Git</button>
                <button class="btn btn-primary" data-file="${writeup.markdownFile}" data-github="${writeup.githubUrl}">View</button>
            </div>
        `;
        writeupsGrid.appendChild(card);
    });
    
    // Add event listeners to writeup buttons
    document.querySelectorAll('#writeups-grid .btn').forEach(btn => {
        if (btn.textContent === 'Git') {
            btn.addEventListener('click', () => {
                window.open(btn.getAttribute('data-github'), '_blank', 'noopener,noreferrer');
            });
        } else if (btn.textContent === 'View') {
            btn.addEventListener('click', () => {
                loadMarkdown(btn.getAttribute('data-file'), btn.getAttribute('data-github'));
            });
        }
    });
}

// Load Markdown Content
function loadMarkdown(filePath, githubUrl) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}`);
            }
            return response.text();
        })
        .then(markdown => {
            // Parse markdown to HTML
            markdownContent.innerHTML = marked.parse(markdown);
            
            // Set GitHub URL for the button
            githubBtn.setAttribute('data-github', githubUrl);
            
            // Switch to detail view
            switchSection('detail-view');
        })
        .catch(error => {
            console.error('Error loading markdown:', error);
            markdownContent.innerHTML = `
                <div class="error">
                    <h2>Content Not Available</h2>
                    <p>The requested content could not be loaded. Please try again later.</p>
                </div>
            `;
            switchSection('detail-view');
        });
}

// Initialize the application
function init() {
    // Initialize Matrix
    initMatrix();
    startMatrix();
    
    // Render projects and writeups
    renderProjects();
    renderWriteups();
    
    // Set up navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(link.getAttribute('data-section'));
        });
    });
    
    // Set up hamburger menu
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
        navMenu.classList.toggle('active');
    });
    
    // Set up back button
    backBtn.addEventListener('click', () => {
        // Determine which section to go back to based on the content type
        const isProject = projects.some(project => 
            project.markdownFile === githubBtn.getAttribute('data-github').includes('project')
        );
        switchSection(isProject ? 'projects' : 'writeups');
    });
    
    // Set up GitHub button
    githubBtn.addEventListener('click', () => {
        window.open(githubBtn.getAttribute('data-github'), '_blank', 'noopener,noreferrer');
    });
    
    // Set up contact buttons
    contactBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=duncanmaganga10@gmail.com&su=Hello%20Duncan', '_blank', 'noopener,noreferrer');
        });
    });
    
    // Set up social links
    socialLinks.forEach(link => {
        const platform = link.getAttribute('data-platform');
        link.href = socialUrls[platform];
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(socialUrls[platform], '_blank', 'noopener,noreferrer');
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        initMatrix();
    });
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

