// Project metadata array
const projects = [
    {
        id: 1,
        title: "Phishing Simulation with GoPhish",
        description: "A comprehensive phishing simulation campaign using GoPhish to test employee awareness.",
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
        description: "A secure system for sharing sensitive files with encryption and access control.",
        githubUrl: "https://github.com/Duncan-Maganga/FUTURE_CS_003",
        markdownFile: "projects/project4.md"
    }
];

// Generate placeholder projects 5-50
for (let i = 5; i <= 50; i++) {
    projects.push({
        id: i,
        title: `Project ${i}`,
        description: `Description for Project ${i}. This is a placeholder project in cybersecurity.`,
        githubUrl: `https://github.com/Duncan-Maganga/project-${i}`,
        markdownFile: `projects/project${i}.md`
    });
}

// Writeup metadata array
const writeups = [
    {
        id: 1,
        title: "Understanding SMB: What It Is, How It Works, and Why It Matters",
        description: "An in-depth exploration of the Server Message Block protocol and its security implications.",
        githubUrl: "https://github.com/Duncan-Maganga/Understanding-SMB-What-It-Is-How-It-Works-and-Why-It-Matters",
        markdownFile: "writeups/writeup1.md"
    },
    {
        id: 2,
        title: "Suricata Lab Demo",
        description: "Hands-on demonstration of Suricata IDS/IPS capabilities in a lab environment.",
        githubUrl: "https://github.com/Duncan-Maganga/Suricata",
        markdownFile: "writeups/writeup2.md"
    }
];

// Generate placeholder writeups 3-50
for (let i = 3; i <= 50; i++) {
    writeups.push({
        id: i,
        title: `Writeup ${i}`,
        description: `Description for Writeup ${i}. This is a placeholder cybersecurity writeup.`,
        githubUrl: `https://github.com/Duncan-Maganga/writeup-${i}`,
        markdownFile: `writeups/writeup${i}.md`
    });
}

// Social media links
const socialLinks = {
    linkedin: "https://www.linkedin.com/in/duncan-maganga-1b1b3b1b2/",
    twitter: "https://twitter.com/duncanmaganga",
    github: "https://github.com/Duncan-Maganga",
    medium: "https://medium.com/@duncanmaganga10"
};

// DOM elements
const matrixCanvas = document.getElementById('matrix');
const navLinks = document.querySelectorAll('.nav-link');
const contentSections = document.querySelectorAll('.content-section');
const projectsGrid = document.getElementById('projects-grid');
const writeupsGrid = document.getElementById('writeups-grid');
const markdownContent = document.getElementById('markdown-content');
const backButton = document.getElementById('back-button');
const githubButton = document.getElementById('github-button');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const viewProjectsBtn = document.getElementById('view-projects');
const getInTouchBtn = document.getElementById('get-in-touch');
const blogBtn = document.getElementById('blog-btn');
const mediumBtn = document.getElementById('medium-btn');
const contactBtn = document.getElementById('contact-btn');

// Matrix animation variables
let matrixCtx = matrixCanvas.getContext('2d');
matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

let matrixChars = "01010101abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
matrixChars = matrixChars.split("");

const fontSize = 14;
const columns = matrixCanvas.width / fontSize;
const drops = [];
let matrixAnimationId = null;

// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Matrix animation
function drawMatrix() {
    matrixCtx.fillStyle = "rgba(10, 25, 47, 0.05)";
    matrixCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    matrixCtx.fillStyle = "#64ffda";
    matrixCtx.font = fontSize + "px monospace";
    
    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        drops[i]++;
    }
    
    matrixAnimationId = requestAnimationFrame(drawMatrix);
}

// Start matrix animation
function startMatrix() {
    if (!matrixAnimationId) {
        matrixCanvas.style.display = 'block';
        drawMatrix();
    }
}

// Stop matrix animation
function stopMatrix() {
    if (matrixAnimationId) {
        cancelAnimationFrame(matrixAnimationId);
        matrixAnimationId = null;
        matrixCanvas.style.display = 'none';
    }
}

// Navigation functions
function switchSection(sectionId) {
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === sectionId) {
            link.classList.add('active');
        }
    });
    
    // Show matrix on list pages, hide on detail view
    if (sectionId === 'detail-view') {
        stopMatrix();
    } else {
        startMatrix();
    }
    
    // Close mobile menu if open
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
}

// Render project cards
function renderProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="card-actions">
                <button class="btn btn-primary git-btn" data-url="${project.githubUrl}">Git</button>
                <button class="btn btn-secondary view-btn" data-file="${project.markdownFile}" data-url="${project.githubUrl}">View</button>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
    
    // Add event listeners to the new buttons
    document.querySelectorAll('.git-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.open(btn.getAttribute('data-url'), '_blank', 'noopener,noreferrer');
        });
    });
    
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadMarkdown(btn.getAttribute('data-file'), btn.getAttribute('data-url'));
        });
    });
}

// Render writeup cards
function renderWriteups() {
    writeupsGrid.innerHTML = '';
    
    writeups.forEach(writeup => {
        const writeupCard = document.createElement('div');
        writeupCard.className = 'writeup-card';
        writeupCard.innerHTML = `
            <h3>${writeup.title}</h3>
            <p>${writeup.description}</p>
            <div class="card-actions">
                <button class="btn btn-primary git-btn" data-url="${writeup.githubUrl}">Git</button>
                <button class="btn btn-secondary view-btn" data-file="${writeup.markdownFile}" data-url="${writeup.githubUrl}">View</button>
            </div>
        `;
        writeupsGrid.appendChild(writeupCard);
    });
    
    // Add event listeners to the new buttons
    document.querySelectorAll('.git-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.open(btn.getAttribute('data-url'), '_blank', 'noopener,noreferrer');
        });
    });
    
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadMarkdown(btn.getAttribute('data-file'), btn.getAttribute('data-url'));
        });
    });
}

// Load markdown content
function loadMarkdown(filePath, githubUrl) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Markdown file not found');
            }
            return response.text();
        })
        .then(markdown => {
            markdownContent.innerHTML = marked.parse(markdown);
            githubButton.setAttribute('data-url', githubUrl);
            switchSection('detail-view');
        })
        .catch(error => {
            markdownContent.innerHTML = `
                <h2>Content Not Available</h2>
                <p>The requested content could not be loaded. ${error.message}</p>
                <p>Please check the GitHub repository for more information.</p>
            `;
            githubButton.setAttribute('data-url', githubUrl);
            switchSection('detail-view');
        });
}

// Setup social links
function setupSocialLinks() {
    // Header social links
    document.getElementById('linkedin').href = socialLinks.linkedin;
    document.getElementById('twitter').href = socialLinks.twitter;
    document.getElementById('github').href = socialLinks.github;
    document.getElementById('medium').href = socialLinks.medium;
    
    // Footer social links
    document.getElementById('footer-linkedin').href = socialLinks.linkedin;
    document.getElementById('footer-twitter').href = socialLinks.twitter;
    document.getElementById('footer-github').href = socialLinks.github;
    document.getElementById('footer-medium').href = socialLinks.medium;
    
    // Add external link attributes
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
}

// Event listeners
function setupEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchSection(link.getAttribute('data-target'));
        });
    });
    
    // Back button
    backButton.addEventListener('click', () => {
        switchSection('projects');
    });
    
    // GitHub button
    githubButton.addEventListener('click', () => {
        window.open(githubButton.getAttribute('data-url'), '_blank', 'noopener,noreferrer');
    });
    
    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Home page buttons
    viewProjectsBtn.addEventListener('click', () => {
        switchSection('projects');
    });
    
    getInTouchBtn.addEventListener('click', () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=duncanmaganga10@gmail.com&su=Hello%20Duncan', '_blank', 'noopener,noreferrer');
    });
    
    blogBtn.addEventListener('click', () => {
        window.open('https://medium.com/@duncanmaganga10', '_blank', 'noopener,noreferrer');
    });
    
    // Blog page button
    mediumBtn.addEventListener('click', () => {
        window.open('https://medium.com/@duncanmaganga10', '_blank', 'noopener,noreferrer');
    });
    
    // Contact page button
    contactBtn.addEventListener('click', () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=duncanmaganga10@gmail.com&su=Hello%20Duncan', '_blank', 'noopener,noreferrer');
    });
    
    // Window resize
    window.addEventListener('resize', () => {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        
        // Recalculate columns for matrix
        const newColumns = matrixCanvas.width / fontSize;
        while (drops.length < newColumns) {
            drops.push(1);
        }
        while (drops.length > newColumns) {
            drops.pop();
        }
    });
}

// Initialize the application
function init() {
    renderProjects();
    renderWriteups();
    setupSocialLinks();
    setupEventListeners();
    startMatrix();
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

