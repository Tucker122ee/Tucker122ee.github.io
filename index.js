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
    // Projects 4-50 with specific URLs and descriptions
    {
        id: 4,
        title: "Project 4",
        description: "Developed a phishing simulation campaign using Gophish.",
        githubUrl: "https://github.com/Duncan-Magangaa",
        markdownFile: "projects/project4.md"
    },
    {
        id: 5,
        title: "Project 5",
        description: "Built an automated vulnerability scanner with Python.",
        githubUrl: "https://github.com/Duncan-MagangaA",
        markdownFile: "projects/project5.md"
    },
    {
        id: 6,
        title: "Project 6",
        description: "Configured SIEM rules for real-time incident detection.",
        githubUrl: "https://github.com/Duncan-Magangab",
        markdownFile: "projects/project6.md"
    },
    {
        id: 7,
        title: "Project 7",
        description: "Created a malware sandbox for safe binary execution.",
        githubUrl: "https://github.com/Duncan-MagangAB",
        markdownFile: "projects/project7.md"
    },
    {
        id: 8,
        title: "Project 8",
        description: "Set up honeypots to collect attacker TTPs.",
        githubUrl: "https://github.com/Duncan-Magangac",
        markdownFile: "projects/project8.md"
    },
    {
        id: 9,
        title: "Project 9",
        description: "Implemented network intrusion detection with Suricata.",
        githubUrl: "https://github.com/Duncan-MagangAC",
        markdownFile: "projects/project9.md"
    },
    {
        id: 10,
        title: "Project 10",
        description: "Deployed secure Active Directory environment for testing.",
        githubUrl: "https://github.com/Duncan-Magangad",
        markdownFile: "projects/project10.md"
    },
    {
        id: 11,
        title: "Project 11",
        description: "Automated phishing email detection with regex rules.",
        githubUrl: "https://github.com/Duncan-MagangAD",
        markdownFile: "projects/project11.md"
    },
    {
        id: 12,
        title: "Project 12",
        description: "Conducted penetration testing on web applications.",
        githubUrl: "https://github.com/Duncan-Magangae",
        markdownFile: "projects/project12.md"
    },
    {
        id: 13,
        title: "Project 13",
        description: "Performed threat hunting exercises on enterprise logs.",
        githubUrl: "https://github.com/Duncan-MagangAE",
        markdownFile: "projects/project13.md"
    },
    {
        id: 14,
        title: "Project 14",
        description: "Built custom payloads for red team operations.",
        githubUrl: "https://github.com/Duncan-Magangaf",
        markdownFile: "projects/project14.md"
    },
    {
        id: 15,
        title: "Project 15",
        description: "Analyzed ransomware behavior in isolated lab.",
        githubUrl: "https://github.com/Duncan-MagangAF",
        markdownFile: "projects/project15.md"
    },
    {
        id: 16,
        title: "Project 16",
        description: "Implemented EDR monitoring for abnormal login activity.",
        githubUrl: "https://github.com/Duncan-Magangag",
        markdownFile: "projects/project16.md"
    },
    {
        id: 17,
        title: "Project 17",
        description: "Created custom exploits for privilege escalation.",
        githubUrl: "https://github.com/Duncan-MagangAG",
        markdownFile: "projects/project17.md"
    },
    {
        id: 18,
        title: "Project 18",
        description: "Configured firewall rules for zero-trust segmentation.",
        githubUrl: "https://github.com/Duncan-Magangah",
        markdownFile: "projects/project18.md"
    },
    {
        id: 19,
        title: "Project 19",
        description: "Tested API endpoints for injection vulnerabilities.",
        githubUrl: "https://github.com/Duncan-MagangAH",
        markdownFile: "projects/project19.md"
    },
    {
        id: 20,
        title: "Project 20",
        description: "Built a dashboard for real-time SOC metrics.",
        githubUrl: "https://github.com/Duncan-Magangai",
        markdownFile: "projects/project20.md"
    },
    {
        id: 21,
        title: "Project 21",
        description: "Reverse engineered obfuscated malware samples.",
        githubUrl: "https://github.com/Duncan-MangangAI",
        markdownFile: "projects/project21.md"
    },
    {
        id: 22,
        title: "Project 22",
        description: "Simulated insider threat scenarios with controlled accounts.",
        githubUrl: "https://github.com/Duncan-Mangangaj",
        markdownFile: "projects/project22.md"
    },
    {
        id: 23,
        title: "Project 23",
        description: "Developed an incident response playbook for SOC teams.",
        githubUrl: "https://github.com/Duncan-MangangAJ",
        markdownFile: "projects/project23.md"
    },
    {
        id: 24,
        title: "Project 24",
        description: "Automated log enrichment with threat intelligence feeds.",
        githubUrl: "https://github.com/Duncan-Mangangak",
        markdownFile: "projects/project24.md"
    },
    {
        id: 25,
        title: "Project 25",
        description: "Performed penetration testing on IoT devices.",
        githubUrl: "https://github.com/Duncan-MangangAK",
        markdownFile: "projects/project25.md"
    },
    {
        id: 26,
        title: "Project 26",
        description: "Analyzed phishing kits and templates.",
        githubUrl: "https://github.com/Duncan-Mangal",
        markdownFile: "projects/project26.md"
    },
    {
        id: 27,
        title: "Project 27",
        description: "Investigated credential stuffing attacks.",
        githubUrl: "https://github.com/Duncan-MangalL",
        markdownFile: "projects/project27.md"
    },
    {
        id: 28,
        title: "Project 28",
        description: "Created detection signatures for MITRE ATT&CK techniques.",
        githubUrl: "https://github.com/Duncan-Manganm",
        markdownFile: "projects/project28.md"
    },
    {
        id: 29,
        title: "Project 29",
        description: "Tested password policies for enterprise environments.",
        githubUrl: "https://github.com/Duncan-ManganM",
        markdownFile: "projects/project29.md"
    },
    {
        id: 30,
        title: "Project 30",
        description: "Conducted security awareness training simulations.",
        githubUrl: "https://github.com/Duncan-Magann",
        markdownFile: "projects/project30.md"
    },
    {
        id: 31,
        title: "Project 31",
        description: "Configured syslog forwarding for centralized monitoring.",
        githubUrl: "https://github.com/Duncan-MaganN",
        markdownFile: "projects/project31.md"
    },
    {
        id: 32,
        title: "Project 32",
        description: "Built an AI-powered anomaly detection model for logs.",
        githubUrl: "https://github.com/Duncan-Magano",
        markdownFile: "projects/project32.md"
    },
    {
        id: 33,
        title: "Project 33",
        description: "Analyzed CVE vulnerabilities for patch management.",
        githubUrl: "https://github.com/Duncan-MaganO",
        markdownFile: "projects/project33.md"
    },
    {
        id: 34,
        title: "Project 34",
        description: "Simulated DDoS attacks for resilience testing.",
        githubUrl: "https://github.com/Duncan-Maganp",
        markdownFile: "projects/project34.md"
    },
    {
        id: 35,
        title: "Project 35",
        description: "Integrated threat intel APIs into SIEM workflows.",
        githubUrl: "https://github.com/Duncan-MaganP",
        markdownFile: "projects/project35.md"
    },
    {
        id: 36,
        title: "Project 36",
        description: "Conducted forensic analysis on compromised endpoints.",
        githubUrl: "https://github.com/Duncan-Maganq",
        markdownFile: "projects/project36.md"
    },
    {
        id: 37,
        title: "Project 37",
        description: "Developed SOC automation workflows with n8n.",
        githubUrl: "https://github.com/Duncan-MaganQ",
        markdownFile: "projects/project37.md"
    },
    {
        id: 38,
        title: "Project 38",
        description: "Explored API security flaws in mobile apps.",
        githubUrl: "https://github.com/Duncan-Maganr",
        markdownFile: "projects/project38.md"
    },
    {
        id: 39,
        title: "Project 39",
        description: "Simulated APT-style persistence on test networks.",
        githubUrl: "https://github.com/Duncan-MaganR",
        markdownFile: "projects/project39.md"
    },
    {
        id: 40,
        title: "Project 40",
        description: "Implemented secure coding practices in Python apps.",
        githubUrl: "https://github.com/Duncan-Magans",
        markdownFile: "projects/project40.md"
    },
    {
        id: 41,
        title: "Project 41",
        description: "Monitored cloud workloads for anomalous activity.",
        githubUrl: "https://github.com/Duncan-MaganS",
        markdownFile: "projects/project41.md"
    },
    {
        id: 42,
        title: "Project 42",
        description: "Conducted red team-blue team cyber defense exercise.",
        githubUrl: "https://github.com/Duncan-Magant",
        markdownFile: "projects/project42.md"
    },
    {
        id: 43,
        title: "Project 43",
        description: "Configured Splunk dashboards for SOC analysis.",
        githubUrl: "https://github.com/Duncan-MaganT",
        markdownFile: "projects/project43.md"
    },
    {
        id: 44,
        title: "Project 44",
        description: "Implemented MFA and adaptive authentication controls.",
        githubUrl: "https://github.com/Duncan-Maganu",
        markdownFile: "projects/project44.md"
    },
    {
        id: 45,
        title: "Project 45",
        description: "Explored evasion techniques against modern EDRs.",
        githubUrl: "https://github.com/Duncan-MaganU",
        markdownFile: "projects/project45.md"
    },
    {
        id: 46,
        title: "Project 46",
        description: "Developed Python scripts for automated exploit testing.",
        githubUrl: "https://github.com/Duncan-Maganv",
        markdownFile: "projects/project46.md"
    },
    {
        id: 47,
        title: "Project 47",
        description: "Investigated ransomware encryption techniques.",
        githubUrl: "https://github.com/Duncan-MaganV",
        markdownFile: "projects/project47.md"
    },
    {
        id: 48,
        title: "Project 48",
        description: "Tested secure file transfer with encryption layers.",
        githubUrl: "https://github.com/Duncan-Maganw",
        markdownFile: "projects/project48.md"
    },
    {
        id: 49,
        title: "Project 49",
        description: "Explored AI-assisted phishing detection models.",
        githubUrl: "https://github.com/Duncan-MaganW",
        markdownFile: "projects/project49.md"
    },
    {
        id: 50,
        title: "Project 50",
        description: "Researched the future of SOC automation with AI.",
        githubUrl: "https://github.com/Duncan-Maganx",
        markdownFile: "projects/project50.md"
    }
];

// Writeup Metadata (50 writeups)
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
    },
    // Writeups 3-50 with specific URLs and descriptions
    {
        id: 3,
        title: "Writeup 3",
        description: "Exploring phishing attack simulations and mitigation strategies.",
        githubUrl: "https://github.com/Duncan-Magangaa",
        markdownFile: "writeups/writeup3.md"
    },
    {
        id: 4,
        title: "Writeup 4",
        description: "SQL injection case study with real-world exploitation patterns.",
        githubUrl: "https://github.com/Duncan-MagangaA",
        markdownFile: "writeups/writeup4.md"
    },
    {
        id: 5,
        title: "Writeup 5",
        description: "Cross-site scripting (XSS) vulnerability testing in web apps.",
        githubUrl: "https://github.com/Duncan-Magangb",
        markdownFile: "writeups/writeup5.md"
    },
    {
        id: 6,
        title: "Writeup 6",
        description: "Reverse engineering malware samples in a sandboxed lab.",
        githubUrl: "https://github.com/Duncan-MagangB",
        markdownFile: "writeups/writeup6.md"
    },
    {
        id: 7,
        title: "Writeup 7",
        description: "Investigating brute-force attacks and password cracking tools.",
        githubUrl: "https://github.com/Duncan-Magangc",
        markdownFile: "writeups/writeup7.md"
    },
    {
        id: 8,
        title: "Writeup 8",
        description: "Packet sniffing and traffic analysis using Wireshark.",
        githubUrl: "https://github.com/Duncan-MagangC",
        markdownFile: "writeups/writeup8.md"
    },
    {
        id: 9,
        title: "Writeup 9",
        description: "Privilege escalation techniques on Linux environments.",
        githubUrl: "https://github.com/Duncan-Magangd",
        markdownFile: "writeups/writeup9.md"
    },
    {
        id: 10,
        title: "Writeup 10",
        description: "Windows Active Directory exploitation fundamentals.",
        githubUrl: "https://github.com/Duncan-MagangD",
        markdownFile: "writeups/writeup10.md"
    },
    {
        id: 11,
        title: "Writeup 11",
        description: "Post-exploitation persistence mechanisms in real networks.",
        githubUrl: "https://github.com/Duncan-Magange",
        markdownFile: "writeups/writeup11.md"
    },
    {
        id: 12,
        title: "Writeup 12",
        description: "Buffer overflow exploitation basics with C programs.",
        githubUrl: "https://github.com/Duncan-MagangE",
        markdownFile: "writeups/writeup12.md"
    },
    {
        id: 13,
        title: "Writeup 13",
        description: "Incident response workflow for ransomware infections.",
        githubUrl: "https://github.com/Duncan-Magangf",
        markdownFile: "writeups/writeup13.md"
    },
    {
        id: 14,
        title: "Writeup 14",
        description: "Digital forensics imaging and evidence preservation.",
        githubUrl: "https://github.com/Duncan-MagangF",
        markdownFile: "writeups/writeup14.md"
    },
    {
        id: 15,
        title: "Writeup 15",
        description: "Enumeration techniques in penetration testing engagements.",
        githubUrl: "https://github.com/Duncan-Mangang",
        markdownFile: "writeups/writeup15.md"
    },
    {
        id: 16,
        title: "Writeup 16",
        description: "Cloud security misconfigurations in AWS environments.",
        githubUrl: "https://github.com/Duncan-MangangG",
        markdownFile: "writeups/writeup16.md"
    },
    {
        id: 17,
        title: "Writeup 17",
        description: "Using OSINT tools for threat intelligence gathering.",
        githubUrl: "https://github.com/Duncan-Manganh",
        markdownFile: "writeups/writeup17.md"
    },
    {
        id: 18,
        title: "Writeup 18",
        description: "Simulating insider threats in corporate networks.",
        githubUrl: "https://github.com/Duncan-ManganH",
        markdownFile: "writeups/writeup18.md"
    },
    {
        id: 19,
        title: "Writeup 19",
        description: "Phishing email header analysis and detection methods.",
        githubUrl: "https://github.com/Duncan-Mangani",
        markdownFile: "writeups/writeup19.md"
    },
    {
        id: 20,
        title: "Writeup 20",
        description: "Network scanning with Nmap for vulnerability discovery.",
        githubUrl: "https://github.com/Duncan-ManganI",
        markdownFile: "writeups/writeup20.md"
    },
    {
        id: 21,
        title: "Writeup 21",
        description: "Firewalls vs intrusion detection/prevention systems (IDS/IPS).",
        githubUrl: "https://github.com/Duncan-Manganj",
        markdownFile: "writeups/writeup21.md"
    },
    {
        id: 22,
        title: "Writeup 22",
        description: "Keylogging techniques and defensive countermeasures.",
        githubUrl: "https://github.com/Duncan-ManganJ",
        markdownFile: "writeups/writeup22.md"
    },
    {
        id: 23,
        title: "Writeup 23",
        description: "Analyzing attack logs to trace lateral movement attempts.",
        githubUrl: "https://github.com/Duncan-Magank",
        markdownFile: "writeups/writeup23.md"
    },
    {
        id: 24,
        title: "Writeup 24",
        description: "DNS tunneling attacks and detection techniques.",
        githubUrl: "https://github.com/Duncan-MaganK",
        markdownFile: "writeups/writeup24.md"
    },
    {
        id: 25,
        title: "Writeup 25",
        description: "Setting up honeypots to attract and study attackers.",
        githubUrl: "https://github.com/Duncan-Maganl",
        markdownFile: "writeups/writeup25.md"
    },
    {
        id: 26,
        title: "Writeup 26",
        description: "Binary exploitation challenges in Capture The Flag (CTF) contests.",
        githubUrl: "https://github.com/Duncan-MaganL",
        markdownFile: "writeups/writeup26.md"
    },
    {
        id: 27,
        title: "Writeup 27",
        description: "Exploring Kerberoasting in Windows environments.",
        githubUrl: "https://github.com/Duncan-Maganm",
        markdownFile: "writeups/writeup27.md"
    },
    {
        id: 28,
        title: "Writeup 28",
        description: "Web application authentication flaws and bypasses.",
        githubUrl: "https://github.com/Duncan-MaganM",
        markdownFile: "writeups/writeup28.md"
    },
    {
        id: 29,
        title: "Writeup 29",
        description: "Tracking command-and-control (C2) communications.",
        githubUrl: "https://github.com/Duncan-Magann",
        markdownFile: "writeups/writeup29.md"
    },
    {
        id: 30,
        title: "Writeup 30",
        description: "Wireless network attacks with WPA2 cracking.",
        githubUrl: "https://github.com/Duncan-MaganN",
        markdownFile: "writeups/writeup30.md"
    },
    {
        id: 31,
        title: "Writeup 31",
        description: "Using threat hunting techniques for proactive defense.",
        githubUrl: "https://github.com/Duncan-Magano",
        markdownFile: "writeups/writeup31.md"
    },
    {
        id: 32,
        title: "Writeup 32",
        description: "MITRE ATT&CK framework mapping for incidents.",
        githubUrl: "https://github.com/Duncan-MaganO",
        markdownFile: "writeups/writeup32.md"
    },
    {
        id: 33,
        title: "Writeup 33",
        description: "Developing detection rules in SIEM platforms.",
        githubUrl: "https://github.com/Duncan-Maganp",
        markdownFile: "writeups/writeup33.md"
    },
    {
        id: 34,
        title: "Writeup 34",
        description: "Zero-day exploits and responsible disclosure processes.",
        githubUrl: "https://github.com/Duncan-MaganP",
        markdownFile: "writeups/writeup34.md"
    },
    {
        id: 35,
        title: "Writeup 35",
        description: "Red team vs blue team exercises in enterprise defense.",
        githubUrl: "https://github.com/Duncan-Maganq",
        markdownFile: "writeups/writeup35.md"
    },
    {
        id: 36,
        title: "Writeup 36",
        description: "Insider data exfiltration detection case study.",
        githubUrl: "https://github.com/Duncan-MaganQ",
        markdownFile: "writeups/writeup36.md"
    },
    {
        id: 37,
        title: "Writeup 37",
        description: "Scripting for automation in penetration testing.",
        githubUrl: "https://github.com/Duncan-Maganr",
        markdownFile: "writeups/writeup37.md"
    },
    {
        id: 38,
        title: "Writeup 38",
        description: "Deep dive into SSL/TLS man-in-the-middle attacks.",
        githubUrl: "https://github.com/Duncan-MaganR",
        markdownFile: "writeups/writeup38.md"
    },
    {
        id: 39,
        title: "Writeup 39",
        description: "Malware obfuscation and unpacking techniques.",
        githubUrl: "https://github.com/Duncan-Magans",
        markdownFile: "writeups/writeup39.md"
    },
    {
        id: 40,
        title: "Writeup 40",
        description: "Advanced persistent threat (APT) lifecycle explained.",
        githubUrl: "https://github.com/Duncan-MaganS",
        markdownFile: "writeups/writeup40.md"
    },
    {
        id: 41,
        title: "Writeup 41",
        description: "Analyzing phishing kits and automation scripts.",
        githubUrl: "https://github.com/Duncan-Magant",
        markdownFile: "writeups/writeup41.md"
    },
    {
        id: 42,
        title: "Writeup 42",
        description: "IoT device vulnerabilities and exploitation.",
        githubUrl: "https://github.com/Duncan-MaganT",
        markdownFile: "writeups/writeup42.md"
    },
    {
        id: 43,
        title: "Writeup 43",
        description: "Evading antivirus and endpoint detection systems.",
        githubUrl: "https://github.com/Duncan-Maganu",
        markdownFile: "writeups/writeup43.md"
    },
    {
        id: 44,
        title: "Writeup 44",
        description: "Supply chain attack case study and prevention.",
        githubUrl: "https://github.com/Duncan-MaganU",
        markdownFile: "writeups/writeup44.md"
    },
    {
        id: 45,
        title: "Writeup 45",
        description: "Analyzing credential dumps from breached databases.",
        githubUrl: "https://github.com/Duncan-Maganv",
        markdownFile: "writeups/writeup45.md"
    },
    {
        id: 46,
        title: "Writeup 46",
        description: "Threat modeling for enterprise applications.",
        githubUrl: "https://github.com/Duncan-MaganV",
        markdownFile: "writeups/writeup46.md"
    },
    {
        id: 47,
        title: "Writeup 47",
        description: "Privilege abuse in cloud-native applications.",
        githubUrl: "https://github.com/Duncan-Maganw",
        markdownFile: "writeups/writeup47.md"
    },
    {
        id: 48,
        title: "Writeup 48",
        description: "Exploring social engineering attack techniques.",
        githubUrl: "https://github.com/Duncan-MaganW",
        markdownFile: "writeups/writeup48.md"
    },
    {
        id: 49,
        title: "Writeup 49",
        description: "API security testing and common pitfalls.",
        githubUrl: "https://github.com/Duncan-Maganx",
        markdownFile: "writeups/writeup49.md"
    },
    {
        id: 50,
        title: "Writeup 50",
        description: "Future of cybersecurity and AI-driven defense.",
        githubUrl: "https://github.com/Duncan-MaganX",
        markdownFile: "writeups/writeup50.md"
    }
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
    matrixCctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    
    // Set green text with varying opacity
    matrixCtx.fillStyle = '#64ffda';
    
    // Draw characters - using only English alphanumeric characters
    matrixColumns.forEach((y, index) => {
        // Generate random English alphanumeric character
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
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
    window.addEventListener('resize', () {
        initMatrix();
    });
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);


