// ===== PROJECT DETAIL PAGE FUNCTIONALITY =====

class ProjectDetailManager {
    constructor() {
        this.currentProject = null;
        this.init();
    }
    
    init() {
        // Wait for config to load and DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => this.loadProjectData(), 100); // Small delay to ensure config is loaded
                this.setupEventListeners();
            });
        } else {
            // DOM already loaded, check if config is available
            if (window.PORTFOLIO_CONFIG) {
                this.loadProjectData();
                this.setupEventListeners();
            } else {
                // Wait a bit for config to load
                setTimeout(() => {
                    this.loadProjectData();
                    this.setupEventListeners();
                }, 200);
            }
        }
    }
    
    loadProjectData() {
        // Get project ID from localStorage
        const projectId = localStorage.getItem('selectedProject');
        
        if (!projectId || !window.PORTFOLIO_CONFIG) {
            this.showError('Project not found');
            return;
        }
        
        // Find the project
        this.currentProject = window.PORTFOLIO_CONFIG.projects.find(
            project => project.id === parseInt(projectId)
        );
        
        if (!this.currentProject) {
            this.showError('Project not found');
            return;
        }
        
        this.populateProjectData();
        this.loadOtherProjects();
    }
    
    populateProjectData() {
        const project = this.currentProject;
        
        // Update title
        document.getElementById('projectTitle').textContent = project.title;
        document.title = `${project.title} - Portfolio`;
        
        // Update technologies
        const techContainer = document.getElementById('projectTechnologies');
        techContainer.innerHTML = project.technologies
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');
        
        // Update links
        const githubLink = document.getElementById('projectGithub');
        const liveLink = document.getElementById('projectLive');
        
        if (project.githubUrl && project.githubUrl !== '#') {
            githubLink.href = project.githubUrl;
        } else {
            githubLink.style.display = 'none';
        }
        
        if (project.liveUrl && project.liveUrl !== '#') {
            liveLink.href = project.liveUrl;
        } else {
            liveLink.style.display = 'none';
        }
        
        // Update image
        const projectImage = document.getElementById('projectImage');
        projectImage.src = `../${project.image}`;
        projectImage.alt = project.title;
        
        // Update description (using the basic description for now)
        document.getElementById('projectDescription').textContent = project.description;
        
        // Generate additional content based on project
        this.generateProjectFeatures(project);
        this.generateProjectChallenges(project);
        this.generateProjectLearnings(project);
    }
    
    generateProjectFeatures(project) {
        const featuresContainer = document.getElementById('projectFeatures');
        
        // Generate features based on technologies used
        const features = this.getProjectFeatures(project);
        featuresContainer.innerHTML = features
            .map(feature => `<li>${feature}</li>`)
            .join('');
    }
    
    getProjectFeatures(project) {
        // Generate features based on technologies
        const techFeatures = {
            'HTML': 'Semantic HTML structure for accessibility',
            'CSS': 'Responsive design with modern CSS techniques',
            'JavaScript': 'Interactive user interface and dynamic functionality',
            'React': 'Component-based architecture for scalable development',
            'Node.js': 'Backend API development with Express.js',
            'MongoDB': 'NoSQL database for flexible data storage',
            'Python': 'Backend logic and data processing',
            'Flask': 'Lightweight web framework for rapid development',
            'PostgreSQL': 'Relational database with complex queries'
        };
        
        let features = project.technologies
            .filter(tech => techFeatures[tech])
            .map(tech => techFeatures[tech]);
        
        // Add some general features
        features.push('Cross-browser compatibility');
        features.push('Mobile-responsive design');
        features.push('Performance optimization');
        
        return features;
    }
    
    generateProjectChallenges(project) {
        const challengesContainer = document.getElementById('projectChallenges');
        
        const challenges = this.getProjectChallenges(project);
        challengesContainer.textContent = challenges;
    }
    
    getProjectChallenges(project) {
        const challengeTemplates = [
            "One of the main challenges was implementing responsive design that works seamlessly across all devices. This was solved by adopting a mobile-first approach and using CSS Grid and Flexbox for layout management.",
            "Optimizing performance while maintaining rich functionality required careful consideration of code splitting and lazy loading techniques. The solution involved bundling optimization and efficient state management.",
            "Ensuring cross-browser compatibility was challenging due to different CSS implementations. This was resolved by using autoprefixer and thorough testing across multiple browsers and devices."
        ];
        
        // Return a random challenge or one based on project ID
        return challengeTemplates[project.id % challengeTemplates.length];
    }
    
    generateProjectLearnings(project) {
        const learningsContainer = document.getElementById('projectLearnings');
        
        const learnings = this.getProjectLearnings(project);
        learningsContainer.textContent = learnings;
    }
    
    getProjectLearnings(project) {
        const learningTemplates = [
            "This project enhanced my understanding of modern web development practices, particularly in areas of responsive design and user experience. I gained valuable experience in debugging complex issues and implementing efficient solutions.",
            "Working on this project improved my skills in full-stack development and taught me the importance of proper code organization. I learned how to balance functionality with performance optimization.",
            "This project provided insights into advanced CSS techniques and JavaScript best practices. I developed a deeper understanding of accessibility standards and how to create inclusive web experiences."
        ];
        
        return learningTemplates[project.id % learningTemplates.length];
    }
    
    loadOtherProjects() {
        const otherProjectsContainer = document.getElementById('otherProjects');
        
        // Get other projects (excluding current one)
        const otherProjects = window.PORTFOLIO_CONFIG.projects
            .filter(project => project.id !== this.currentProject.id)
            .slice(0, 3); // Show max 3 other projects
        
        otherProjectsContainer.innerHTML = otherProjects
            .map(project => `
                <div class="project-nav-card" onclick="navigateToProject(${project.id})">
                    <h4>${project.title}</h4>
                    <p>${project.description}</p>
                    <div class="project-technologies" style="margin-top: 10px;">
                        ${project.technologies.slice(0, 3).map(tech => 
                            `<span class="tech-tag" style="font-size: 0.75rem;">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            `).join('');
    }
    
    setupEventListeners() {
        // Footer updates
        this.updateFooterInfo();
    }
    
    updateFooterInfo() {
        if (!window.PORTFOLIO_CONFIG) return;
        
        const config = window.PORTFOLIO_CONFIG;
        
        // Update footer name
        const footerName = document.getElementById('footer-name');
        if (footerName) footerName.textContent = config.name;
        
        // Update footer email
        const footerEmail = document.getElementById('footer-email');
        if (footerEmail) footerEmail.textContent = config.contact.email;
        
        // Update footer phone
        const footerPhone = document.getElementById('footer-phone');
        if (footerPhone) footerPhone.textContent = config.contact.phone;
        
        // Update footer social links
        const socialKeys = Object.keys(config.social);
        socialKeys.forEach(key => {
            const element = document.getElementById(`footer-${key}`);
            if (element) {
                element.href = config.social[key];
                element.target = "_blank";
                element.rel = "noopener noreferrer";
            }
        });
    }
    
    showError(message) {
        console.error('Project Detail Error:', message);
        
        const projectTitle = document.getElementById('projectTitle');
        const projectDescription = document.getElementById('projectDescription');
        const projectTechnologies = document.getElementById('projectTechnologies');
        const projectImage = document.getElementById('projectImage');
        
        if (projectTitle) projectTitle.textContent = 'Error Loading Project';
        if (projectDescription) projectDescription.textContent = message;
        
        // Hide other elements safely
        if (projectTechnologies) projectTechnologies.style.display = 'none';
        if (projectImage) projectImage.style.display = 'none';
        
        // Add debug info
        console.log('Available config:', window.PORTFOLIO_CONFIG);
        console.log('Project ID from storage:', localStorage.getItem('selectedProject'));
        
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 3000);
    }
}

// ===== NAVIGATION FUNCTIONS =====
function goBack() {
    window.history.back();
    
    // Fallback if no history
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 100);
}

function navigateToProject(projectId) {
    localStorage.setItem('selectedProject', projectId);
    window.location.reload();
}

// ===== INITIALIZE =====
const projectDetailManager = new ProjectDetailManager();