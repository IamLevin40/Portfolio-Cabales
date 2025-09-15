// ===== PROJECTS GENERATOR =====
class ProjectsGenerator {
    constructor() {
        this.container = document.getElementById('projects-grid');
        this.viewAllBtn = document.getElementById('viewAllBtn');
        this.maxVisibleProjects = 3;
        this.showingAll = false;
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        const config = window.PORTFOLIO_CONFIG;
        if (!config || !config.projects) return;
        
        this.generateProjects();
        this.setupViewAllButton();
    }
    
    generateProjects() {
        const config = window.PORTFOLIO_CONFIG;
        const projects = config.projects || [];
        
        this.container.innerHTML = '';
        
        const visibleProjects = this.showingAll ? projects : projects.slice(0, this.maxVisibleProjects);
        
        visibleProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            this.container.appendChild(projectCard);
        });
        
        // Update view all button visibility
        if (projects.length > this.maxVisibleProjects) {
            this.viewAllBtn.style.display = 'inline-flex';
            this.viewAllBtn.querySelector('.btn-text').textContent = 
                this.showingAll ? 'Show Less' : 'View All Projects';
        } else {
            this.viewAllBtn.style.display = 'none';
        }
    }
    
    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-name">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <button class="project-btn" onclick="viewProjectDetails(${project.id})">
                    View Details
                </button>
            </div>
        `;
        
        return card;
    }
    
    setupViewAllButton() {
        if (!this.viewAllBtn) return;
        
        this.viewAllBtn.addEventListener('click', () => {
            this.showingAll = !this.showingAll;
            this.generateProjects();
            
            // Smooth scroll to projects section
            if (this.showingAll) {
                document.getElementById('projects').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// ===== PROJECT DETAIL NAVIGATION =====
function viewProjectDetails(projectId) {
    localStorage.setItem('selectedProject', projectId);
    window.location.href = 'projects/detail.html';
}

// ===== SPACE DECORATIONS GENERATOR =====
class SpaceDecorations {
    constructor() {
        this.container = document.getElementById('space-decorations');
        this.init();
    }
    
    init() {
        if (!this.container) return;
        
        const config = window.PORTFOLIO_CONFIG?.animations?.homeDecorations || [];
        config.forEach((decoration, index) => {
            this.createDecoration(decoration, index + 1);
        });
    }
    
    createDecoration(decoration, index) {
        const decorationElement = document.createElement('div');
        decorationElement.className = `decoration-item decoration-${index}`;
        
        const iconElement = document.createElement('i');
        iconElement.className = decoration.icon;
        
        decorationElement.appendChild(iconElement);
        this.container.appendChild(decorationElement);
    }
}

// ===== THEME MANAGEMENT =====
class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = document.getElementById('themeIcon');
        this.body = document.body;
        
        this.init();
    }
    
    init() {
        // Load saved theme or default to dark
        const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
        this.setTheme(savedTheme);
        
        // Add event listener
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    setTheme(theme) {
        this.body.setAttribute('data-theme', theme);
        this.updateIcon(theme);
        localStorage.setItem('portfolio-theme', theme);
    }
    
    updateIcon(theme) {
        if (theme === 'dark') {
            this.themeIcon.className = 'fas fa-sun';
        } else {
            this.themeIcon.className = 'fas fa-moon';
        }
    }
    
    toggleTheme() {
        const currentTheme = this.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
}

// ===== FLOATING IMAGES ANIMATION =====
class FloatingImages {
    constructor() {
        this.container = document.getElementById('floatingImages');
        this.images = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        
        this.init();
    }
    
    init() {
        this.createFloatingImages();
        this.bindEvents();
        this.animate();
    }
    
    createFloatingImages() {
        const config = window.PORTFOLIO_CONFIG?.animations || {};
        const imageCount = config.floatingImageCount || 8;
        
        for (let i = 0; i < imageCount; i++) {
            this.createSingleImage();
        }
    }
    
    createSingleImage() {
        const imageElement = document.createElement('div');
        imageElement.className = 'floating-image';
        
        // Create safer positioning within viewport bounds
        const margin = 100; // Keep away from edges
        const x = margin + Math.random() * (this.windowWidth - 2 * margin);
        const y = margin + Math.random() * (this.windowHeight - 2 * margin);
        
        // Get element from config or use default
        const config = window.PORTFOLIO_CONFIG?.animations || {};
        const elements = config.floatingElements || ['🚀', '⭐', '🌟', '💫', '🌌', '🛸', '⚡', '🔮'];
        const element = elements[Math.floor(Math.random() * elements.length)];
        
        imageElement.style.left = x + 'px';
        imageElement.style.top = y + 'px';
        imageElement.innerHTML = element;
        
        // Add click event for star destruction
        imageElement.addEventListener('click', () => this.destroyElement(imageElement));
        
        // Store initial position and movement data
        const imageData = {
            element: imageElement,
            initialX: x,
            initialY: y,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            amplitude: 30 + Math.random() * 50 // Reduced amplitude for safer movement
        };
        
        this.images.push(imageData);
        this.container.appendChild(imageElement);
    }
    
    destroyElement(element) {
        element.classList.add('destroying');
        
        // Remove after animation completes
        setTimeout(() => {
            const imageIndex = this.images.findIndex(img => img.element === element);
            if (imageIndex > -1) {
                this.images.splice(imageIndex, 1);
                element.remove();
                
                // Create a new one to replace it
                setTimeout(() => {
                    this.createSingleImage();
                }, 1000);
            }
        }, 800);
    }
    
    bindEvents() {
        // Mouse movement event
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        
        // Window resize event
        window.addEventListener('resize', () => {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
            this.repositionImages();
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    repositionImages() {
        const margin = 100;
        this.images.forEach(imageData => {
            if (imageData.initialX > this.windowWidth - margin || imageData.initialY > this.windowHeight - margin) {
                imageData.initialX = margin + Math.random() * (this.windowWidth - 2 * margin);
                imageData.initialY = margin + Math.random() * (this.windowHeight - 2 * margin);
            }
        });
    }
    
    animate() {
        this.images.forEach(imageData => {
            const { element, initialX, initialY, speedX, speedY, amplitude } = imageData;
            
            // Calculate mouse influence (reduced for less jarring movement)
            const mouseInfluenceX = (this.mouseX - this.windowWidth / 2) * 0.005;
            const mouseInfluenceY = (this.mouseY - this.windowHeight / 2) * 0.005;
            
            // Calculate time-based movement
            const time = Date.now() * 0.001;
            const offsetX = Math.sin(time * speedX) * amplitude;
            const offsetY = Math.cos(time * speedY) * amplitude;
            
            // Combine initial position, time-based movement, and mouse influence
            const newX = initialX + offsetX + mouseInfluenceX;
            const newY = initialY + offsetY + mouseInfluenceY;
            
            // Keep images within safe bounds with margin
            const margin = 80;
            const boundedX = Math.max(margin, Math.min(newX, this.windowWidth - margin));
            const boundedY = Math.max(margin, Math.min(newY, this.windowHeight - margin));
            
            element.style.transform = `translate(${boundedX - initialX}px, ${boundedY - initialY}px)`;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ===== NAVBAR SCROLL EFFECT =====
class NavbarScrollEffect {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                this.navbar.style.background = 'rgba(33, 33, 46, 0.98)';
                this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                this.navbar.style.background = 'rgba(33, 33, 46, 0.95)';
                this.navbar.style.boxShadow = 'none';
            }
        });
    }
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
class AnimationObserver {
    constructor() {
        this.init();
    }
    
    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe project cards for staggered animation
        document.querySelectorAll('.project-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        // Lazy loading for images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            observer.unobserve(img);
                        }
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
        
        // Throttle resize events
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Trigger resize-related updates
                window.dispatchEvent(new Event('optimizedResize'));
            }, 250);
        });
    }
}

// ===== PROJECT IMAGE RESIZER (dynamic expanded height) =====
class ProjectImageResizer {
    constructor() {
        this.container = document.getElementById('projects-grid');
        this.mutationObserver = null;
        this.init();
    }

    init() {
        if (!this.container) return;
        // Attach to existing cards
        this.attachToAll();

        // Observe for new/removed cards (when View All toggles)
        this.mutationObserver = new MutationObserver(() => {
            // small debounce built-in
            setTimeout(() => this.attachToAll(), 50);
        });
        this.mutationObserver.observe(this.container, { childList: true, subtree: true });

        // Update on optimized resize
        window.addEventListener('optimizedResize', () => this.updateAll());
        // Fallback resize listener with local debounce (avoid referencing Utils before it's defined)
        const debounce = (fn, wait) => {
            let t;
            return function(...args) {
                clearTimeout(t);
                t = setTimeout(() => fn.apply(this, args), wait);
            };
        };
        window.addEventListener('resize', debounce(() => this.updateAll(), 150));
    }

    attachToAll() {
        const cards = Array.from(this.container.querySelectorAll('.project-card'));
        cards.forEach(card => this.attach(card));
    }

    attach(card) {
        if (!card || card.__resizerAttached) return;
        const desc = card.querySelector('.project-description');
        if (!desc) return;

        const updateHeight = () => {
            // Respect reduced motion
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                const collapsed = getComputedStyle(document.documentElement).getPropertyValue('--project-image-collapsed-height') || '200px';
                card.style.setProperty('--project-image-expanded-height', collapsed.trim());
                return;
            }

            // Compute desired height: distance from top of card to bottom of description
            const cardRect = card.getBoundingClientRect();
            const descRect = desc.getBoundingClientRect();
            // desired height in px relative to card
            let desired = Math.round(descRect.bottom - cardRect.top);

            // Ensure it's at least the collapsed height
            const collapsedValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--project-image-collapsed-height')) || 200;
            if (isNaN(desired) || desired < collapsedValue) desired = collapsedValue;

            // Optionally cap desired to a reasonable maximum (prevent insane values)
            const maxCap = Math.max(collapsedValue, card.clientHeight + 200);
            if (desired > maxCap) desired = maxCap;

            card.style.setProperty('--project-image-expanded-height', `${desired}px`);
        };

        // Update on mouseenter so calculation uses current layout
        const onEnter = () => updateHeight();
        // Also update when images inside load (their sizes can change layout)
        const img = card.querySelector('.project-image img');
        if (img && !img.complete) {
            img.addEventListener('load', updateHeight);
        }

        // Mark attached and save cleanup
        card.addEventListener('mouseenter', onEnter);
        card.__resizerAttached = true;
        card.__resizerCleanup = () => {
            card.removeEventListener('mouseenter', onEnter);
            if (img) img.removeEventListener('load', updateHeight);
            card.__resizerAttached = false;
        };

        // Initial compute
        updateHeight();
    }

    updateAll() {
        if (!this.container) return;
        this.container.querySelectorAll('.project-card').forEach(card => {
            const desc = card.querySelector('.project-description');
            if (!desc) return;
            const cardRect = card.getBoundingClientRect();
            const descRect = desc.getBoundingClientRect();
            let desired = Math.round(descRect.bottom - cardRect.top);
            const collapsedValue = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--project-image-collapsed-height')) || 200;
            if (isNaN(desired) || desired < collapsedValue) desired = collapsedValue;
            card.style.setProperty('--project-image-expanded-height', `${desired}px`);
        });
    }
}


// ===== UTILITY FUNCTIONS =====
const Utils = {
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Smooth scroll to element
    smoothScrollTo: (element, duration = 800) => {
        const targetPosition = element.offsetTop - 80; // Account for navbar
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new ThemeManager();
    new SpaceDecorations();
    new ProjectsGenerator();
    // Initialize dynamic image resizer after projects are generated
    new ProjectImageResizer();
    new FloatingImages();
    new NavbarScrollEffect();
    new AnimationObserver();
    new PerformanceOptimizer();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    console.log('Portfolio website initialized successfully! 🚀');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ThemeManager,
        FloatingImages,
        Utils
    };
}