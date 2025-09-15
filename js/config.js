/* 
  Portfolio Configuration File
  
  This file contains all customizable variables for easy maintenance.
  Update these values to personalize your portfolio without diving into the main code.
*/

// ===== PERSONAL INFORMATION =====
const PORTFOLIO_CONFIG = {
  // Basic Info
  name: "Lean Vince Cabales",
  subtitle: "3rd Year Computer Science Student at West Visayas State University",
  email: "levincabales40@gmail.com",
  phone: "+63 960 603 5956",
  
  // Contact Information
  contact: {
    email: "levincabales40@gmail.com",
    phone: "+63 960 603 5956",
    location: "Maloco, Ibajay, Philippines"
  },
  
  // Social Media Links
  social: {
    facebook: "https://web.facebook.com/leanvincecabales",
    youtube: "https://www.youtube.com/@leanvincecabales6982", 
    instagram: "https://www.instagram.com/iamlevin40/",
    linkedin: "https://www.linkedin.com/in/lean-vince-cabales-26bba1382/",
    github: "https://github.com/IamLevin40"
  },
  
  // Projects Data
  projects: [
    {
      id: 1,
      title: "Rooted",
      description: "An Educational Word-Building Combat Game with Environmental Themes.",
      image: "assets/images/project_bg_rooted.png",
      technologies: ["Unity", "C#"],
      liveUrl: "#",
      githubUrl: "https://github.com/IamLevin40/Rooted",
      featured: true,
      fullDescription: "Rooted is a single-player, arcade-style educational game that merges word-building mechanics with environmental action and turn-based combat. Players battle eco-threats by forming new words from root words through the strategic use of prefixes and suffixes. Each valid word becomes an attack, with environmental words dealing double damage and triggering special effects.",
      features: [
        "???"
      ],
      challenges: "???",
      learnings: "???"
    },
    {
      id: 2,
      title: "Rooted",
      description: "An Educational Word-Building Combat Game with Environmental Themes.",
      image: "assets/images/project_bg_rooted.png",
      technologies: ["Unity", "C#"],
      liveUrl: "#",
      githubUrl: "https://github.com/IamLevin40/Rooted",
      featured: true,
      fullDescription: "Rooted is a single-player, arcade-style educational game that merges word-building mechanics with environmental action and turn-based combat. Players battle eco-threats by forming new words from root words through the strategic use of prefixes and suffixes. Each valid word becomes an attack, with environmental words dealing double damage and triggering special effects.",
      features: [
        "???"
      ],
      challenges: "???",
      learnings: "???"
    },
    {
      id: 3,
      title: "Rooted",
      description: "An Educational Word-Building Combat Game with Environmental Themes.",
      image: "assets/images/project_bg_rooted.png",
      technologies: ["Unity", "C#"],
      liveUrl: "#",
      githubUrl: "https://github.com/IamLevin40/Rooted",
      featured: true,
      fullDescription: "Rooted is a single-player, arcade-style educational game that merges word-building mechanics with environmental action and turn-based combat. Players battle eco-threats by forming new words from root words through the strategic use of prefixes and suffixes. Each valid word becomes an attack, with environmental words dealing double damage and triggering special effects.",
      features: [
        "???"
      ],
      challenges: "???",
      learnings: "???"
    },
  ],
  
  // Color Scheme
  colors: {
    primary: "#393F8A",
    secondary: "#65558D", 
    background: "#21212E",
    text: "#ffffff",
    textLight: "#e0e0e0"
  },
  
  // Animation Settings
  animations: {
    enableFloatingImages: true,
    floatingImageCount: 8,
    mouseSensitivity: 0.01,
    transitionSpeed: 0.3,
    // Space + Cyberpunk floating elements (can be images, symbols, or emojis)
    floatingElements: [
      '🚀', '⭐', '🌟', '💫', '🌌', '🛸', '⚡', '🔮', 
      '💎', '🌠', '🔷', '🔹', '◇', '◆', '▲', '▼'
    ],
    // Home section decorative elements
    homeDecorations: [
      { icon: 'fas fa-satellite', position: 'decoration-1' },
      { icon: 'fas fa-rocket', position: 'decoration-2' },
      { icon: 'fas fa-globe', position: 'decoration-3' },
      { icon: 'fas fa-atom', position: 'decoration-4' }
    ]
  },
  
  // SEO & Meta Data
  meta: {
    title: "Lean Vince Cabales - Portfolio",
    description: "Personal portfolio showcasing web development projects and skills",
    keywords: "web developer, portfolio, HTML, CSS, JavaScript, React",
    author: "Lean Vince Cabales"
  }
};

// Make config available globally for other scripts that reference window.PORTFOLIO_CONFIG
window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;

// ===== EASY CUSTOMIZATION FUNCTIONS =====

// Function to update personal info in HTML
function updatePersonalInfo() {
  const titleElement = document.querySelector('.home-title');
  const subtitleElement = document.querySelector('.home-subtitle');
  
  if (titleElement) titleElement.textContent = PORTFOLIO_CONFIG.name;
  if (subtitleElement) subtitleElement.textContent = PORTFOLIO_CONFIG.subtitle;
}

// Function to update social media links
function updateSocialLinks() {
  const socialLinks = document.querySelectorAll('.social-link');
  const socialUrls = Object.values(PORTFOLIO_CONFIG.social);
  
  socialLinks.forEach((link, index) => {
    if (socialUrls[index]) {
      link.href = socialUrls[index];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });
}

// Function to update meta tags
function updateMetaTags() {
  document.title = PORTFOLIO_CONFIG.meta.title;
  
  // Update existing meta tags or create new ones
  const metaTags = [
    { name: 'description', content: PORTFOLIO_CONFIG.meta.description },
    { name: 'keywords', content: PORTFOLIO_CONFIG.meta.keywords },
    { name: 'author', content: PORTFOLIO_CONFIG.meta.author }
  ];
  
  metaTags.forEach(tag => {
    let metaElement = document.querySelector(`meta[name="${tag.name}"]`);
    if (!metaElement) {
      metaElement = document.createElement('meta');
      metaElement.name = tag.name;
      document.head.appendChild(metaElement);
    }
    metaElement.content = tag.content;
  });
}

// Function to dynamically generate project cards
function generateProjectCards() {
  const projectsGrid = document.querySelector('.projects-grid');
  if (!projectsGrid) return;
  
  projectsGrid.innerHTML = ''; // Clear existing cards
  
  PORTFOLIO_CONFIG.projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-content">
        <h3 class="project-name">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-buttons">
          <button class="project-btn primary" onclick="openProject(${project.id})">Explore</button>
          <a href="${project.githubUrl}" class="project-btn secondary" target="_blank">
            <i class="fab fa-github"></i> Code
          </a>
        </div>
      </div>
    `;
    projectsGrid.appendChild(projectCard);
  });
}

// Initialize configuration on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updatePersonalInfo();
  updateSocialLinks();
  updateMetaTags();
  // generateProjectCards(); // Disabled - handled by main.js ProjectsGenerator
  updateFooterInfo();
});

// ===== FOOTER UPDATES =====
function updateFooterInfo() {
  // Update footer name
  const footerName = document.getElementById('footer-name');
  if (footerName) footerName.textContent = PORTFOLIO_CONFIG.name;
  
  // Update footer email
  const footerEmail = document.getElementById('footer-email');
  if (footerEmail) footerEmail.textContent = PORTFOLIO_CONFIG.contact.email;
  
  // Update footer phone
  const footerPhone = document.getElementById('footer-phone');
  if (footerPhone) footerPhone.textContent = PORTFOLIO_CONFIG.contact.phone;
  
  // Update footer social links
  const socialKeys = Object.keys(PORTFOLIO_CONFIG.social);
  socialKeys.forEach(key => {
    const element = document.getElementById(`footer-${key}`);
    if (element) {
      element.href = PORTFOLIO_CONFIG.social[key];
      element.target = "_blank";
      element.rel = "noopener noreferrer";
    }
  });
}

// ===== PROJECT NAVIGATION =====
function openProject(projectId) {
  // Store the selected project ID in localStorage
  localStorage.setItem('selectedProject', projectId);
  // Navigate to the project detail page with query param for reliability
  window.location.href = `projects/detail.html?id=${encodeURIComponent(projectId)}`;
}

// Function to get project by ID
function getProjectById(id) {
  return PORTFOLIO_CONFIG.projects.find(project => project.id === parseInt(id));
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_CONFIG;
}