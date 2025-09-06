// Project metadata
const projects = [
    {
        title: "Phishing Simulation with GoPhish",
        description: "A comprehensive phishing simulation project using GoPhish to test and improve organizational security awareness.",
        githubUrl: "https://github.com/Duncan-Maganga/Phishing-Simulation-with-GoPhish",
        markdownFile: "projects/project1.md"
    },
    {
        title: "Web Application Vulnerability Assessment Report",
        description: "Detailed vulnerability assessment of a web application with findings and remediation recommendations.",
        githubUrl: "https://github.com/Duncan-Maganga/FUTURE_CS_001",
        markdownFile: "projects/project2.md"
    },
    {
        title: "Incident Response Simulation Report",
        description: "Simulated incident response exercise documenting detection, analysis, and response procedures.",
        githubUrl: "https://github.com/Duncan-Maganga/FUTURE_CS_02",
        markdownFile: "projects/project3.md"
    },
    {
        title: "Secure File Sharing System",
        description: "A secure system for sharing files with encryption and access control mechanisms.",
        githubUrl: "https://github.com/Duncan-Maganga/FUTURE_CS_003",
        markdownFile: "projects/project4.md"
    }
];

// Generate placeholder projects 5-50
for (let i = 5; i <= 50; i++) {
    projects.push({
        title: `Project ${i}`,
        description: `Description for Project ${i}. This is a placeholder project description.`,
        githubUrl: `https://github.com/Duncan-Maganga/project-${i}`,
        markdownFile: `projects/project${i}.md`
    });
}

// Writeup metadata
const writeups = [
    {
        title: "Understanding SMB: What It Is, How It Works, and Why It Matters",
        description: "A comprehensive guide to Server Message Block protocol, its functionality, and security implications.",
        githubUrl: "https://github.com/Duncan-Maganga/Understanding-SMB-What-It-Is-How-It-Works-and-Why-It-Matters",
        markdownFile: "writeups/writeup1.md"
    },
    {
        title: "Suricata Lab Demo",
        description: "Hands-on demonstration of Suricata IDS/IPS capabilities in a lab environment.",
        githubUrl: "https://github.com/Duncan-Maganga/Suricata",
        markdownFile: "writeups/writeup2.md"
    }
];

// Generate placeholder writeups 3-50
for (let i = 3; i <= 50; i++) {
    writeups.push({
        title: `Writeup ${i}`,
        description: `Description for Writeup ${i}. This is a placeholder writeup description.`,
        githubUrl: `https://github.com/Duncan-Maganga/writeup-${i}`,
        markdownFile: `writeups/writeup${i}.md`
    });
}

// Matrix animation
const matrix = () => {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const letters = '01010101010101010101010101010101';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 25, 47, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#64ffda';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    let matrixInterval = setInterval(draw, 33);
    
    // Pause/resume functionality
    return {
        pause: () => clearInterval(matrixInterval),
        resume: () => matrixInterval = setInterval(draw, 33),
        resize: () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Recalculate columns
            const newColumns = canvas.width / fontSize;
            for (let i = 0; i < newColumns; i++) {
                if (!drops[i]) drops[i] = 1;
            }
            drops.length = newColumns;
        }
    };
};

// Tab navigation
function initTabs() {
    const tabs = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const tabName = tab.getAttribute('data-tab');
            document.getElementById(tabName).classList.add('active');
            
            // If on mobile, close hamburger menu
            document.querySelector('.nav-menu').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        });
    });
}

// Render project cards
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-content">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-description">${project.description}</p>
                <div class="card-buttons">
                    <a href="${project.githubUrl}" class="card-btn" target="_blank" rel="noopener noreferrer">Git</a>
                    <button class="card-btn view-project" data-index="${index}">View</button>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            showProjectDetail(index);
        });
    });
}

// Render writeup cards
function renderWriteups() {
    const writeupsGrid = document.getElementById('writeups-grid');
    writeupsGrid.innerHTML = '';
    
    writeups.forEach((writeup, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-content">
                <h3 class="card-title">${writeup.title}</h3>
                <p class="card-description">${writeup.description}</p>
                <div class="card-buttons">
                    <a href="${writeup.githubUrl}" class="card-btn" target="_blank" rel="noopener noreferrer">Git</a>
                    <button class="card-btn view-writeup" data-index="${index}">View</button>
                </div>
            </div>
        `;
        writeupsGrid.appendChild(card);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.view-writeup').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            showWriteupDetail(index);
        });
    });
}

// Show project detail
function showProjectDetail(index) {
    const project = projects[index];
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show project detail view
    document.getElementById('project-detail').classList.add('active');
    
    // Set GitHub button link
    document.getElementById('project-github').href = project.githubUrl;
    
    // Load and render markdown
    fetch(project.markdownFile)
        .then(response => response.text())
        .then(markdown => {
            document.getElementById('project-content').innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            document.getElementById('project-content').innerHTML = `
                <h2>${project.title}</h2>
                <p>Error loading project details. Please try again later.</p>
            `;
            console.error('Error loading project markdown:', error);
        });
    
    // Pause matrix animation
    matrixAnimation.pause();
    document.getElementById('matrix').style.display = 'none';
}

// Show writeup detail
function showWriteupDetail(index) {
    const writeup = writeups[index];
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show writeup detail view
    document.getElementById('writeup-detail').classList.add('active');
    
    // Set GitHub button link
    document.getElementById('writeup-github').href = writeup.githubUrl;
    
    // Load and render markdown
    fetch(writeup.markdownFile)
        .then(response => response.text())
        .then(markdown => {
            document.getElementById('writeup-content').innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            document.getElementById('writeup-content').innerHTML = `
                <h2>${writeup.title}</h2>
                <p>Error loading writeup details. Please try again later.</p>
            `;
            console.error('Error loading writeup markdown:', error);
        });
    
    // Pause matrix animation
    matrixAnimation.pause();
    document.getElementById('matrix').style.display = 'none';
}

// Back to list views
function initBackButtons() {
    // Project back button
    document.getElementById('project-back').addEventListener('click', () => {
        document.getElementById('project-detail').classList.remove('active');
        document.getElementById('projects-list').classList.add('active');
        
        // Resume matrix animation
        matrixAnimation.resume();
        document.getElementById('matrix').style.display = 'block';
    });
    
    // Writeup back button
    document.getElementById('writeup-back').addEventListener('click', () => {
        document.getElementById('writeup-detail').classList.remove('active');
        document.getElementById('writeups-list').classList.add('active');
        
        // Resume matrix animation
        matrixAnimation.resume();
        document.getElementById('matrix').style.display = 'block';
    });
}

// Initialize CTA buttons
function initCTAs() {
    // View Projects button
    document.getElementById('view-projects').addEventListener('click', () => {
        document.querySelectorAll('.nav-link').forEach(tab => tab.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        
        document.querySelector('[data-tab="projects"]').classList.add('active');
        document.getElementById('projects-list').classList.add('active');
    });
    
    // Get in Touch button (home)
    document.getElementById('get-in-touch').addEventListener('click', () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=duncanmaganga10@gmail.com&su=Hello%20Duncan', '_blank');
    });
    
    // Blog button
    document.getElementById('blog-btn').addEventListener('click', () => {
        window.open('https://medium.com/@duncanmaganga10', '_blank');
    });
    
    // Get in Touch button (contact)
    document.getElementById('contact-email').addEventListener('click', () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=duncanmaganga10@gmail.com&su=Hello%20Duncan', '_blank');
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize matrix animation
    window.matrixAnimation = matrix();
    
    // Initialize tabs
    initTabs();
    
    // Render project and writeup cards
    renderProjects();
    renderWriteups();
    
    // Initialize back buttons
    initBackButtons();
    
    // Initialize CTA buttons
    initCTAs();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        matrixAnimation.resize();
    });
});

