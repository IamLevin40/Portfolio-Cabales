# Lean Vince Cabales - Portfolio Website

A stunning **space + cyberpunk themed** personal portfolio showcasing the work of **Lean Vince Cabales**, a 3rd Year Computer Science Student at West Visayas State University. Built with vanilla HTML, CSS, and JavaScript, featuring advanced animations, floating cosmic elements, and a fully responsive design.

## 🌌 About This Portfolio

This portfolio represents the digital presence of **Lean Vince Cabales** (IamLevin40), featuring:
- **Educational Game Projects**: Primarily showcasing "Rooted" - an innovative word-building combat game with environmental themes
- **Space-Cyberpunk Aesthetic**: Neon glows, floating cosmic elements, and smooth hover animations
- **Modern Web Technologies**: Clean, maintainable code with modular architecture
- **Professional Presentation**: Designed for potential employers, collaborators, and academic showcases

## ✨ Key Features

- **🎮 Interactive Cosmic Background**: Clickable floating elements with particle effects
- **🌈 Dual Theme Support**: Dark space theme and light mode with seamless transitions  
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop viewing
- **⚡ Smooth Animations**: 60fps animations with `requestAnimationFrame` and CSS transitions
- **🎯 Project Detail System**: Dynamic project pages with smart content hiding/showing
- **🔗 Social Media Integration**: Direct links to GitHub, LinkedIn, Facebook, YouTube, Instagram
- **🎨 Neon Glow Effects**: CSS-powered cyberpunk styling with hover interactions
- **📊 Performance Optimized**: Lazy loading, debounced events, and intersection observers

## 📁 Project Structure

```
Portfolio-Cabales/
├── 📁 assets/
│   ├── 📁 images/
│   │   ├── logo.png              # Personal logo (50x50px)
│   │   ├── profile.jpg           # Profile picture for hero section
│   │   └── project_bg_rooted.png # Rooted game project screenshot
│   └── 📁 icons/                 # Icon assets
├── 📁 css/
│   ├── styles.css                # Main stylesheet with CSS variables & animations
│   └── project-detail.css        # Dedicated styles for project detail pages
├── 📁 js/
│   ├── config.js                 # Portfolio configuration & personal data
│   ├── main.js                   # Core functionality & component classes  
│   └── project-detail.js         # Project detail page manager
├── 📁 projects/
│   └── detail.html               # Dynamic project detail template
├── index.html                    # Main portfolio homepage
└── README.md                     # This documentation
```

## 🎨 Design System

### Color Palette (Space + Cyberpunk Theme)
- **Primary Background**: `#21212E` - Deep space purple
- **Primary Accent**: `#393F8A` - Cosmic purple-blue  
- **Secondary Accent**: `#65558D` - Mystical purple
- **Neon Cyan**: `#1aaef3` - Electric blue glow
- **Neon Pink**: `#ff27d7` - Hot pink highlights
- **Text Primary**: `#ffffff` - Pure white
- **Text Secondary**: `#e0e0e0` - Soft gray

### Typography & Spacing
- **Font Stack**: Arial, sans-serif (clean and readable)
- **Modular Scale**: XS(0.5rem) → SM(1rem) → MD(1.5rem) → LG(2rem) → XL(3rem) → XXL(4rem)
- **Transitions**: Fast(0.2s), Normal(0.3s), Slow(0.5s) - all with ease curves

## 🛠️ Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, ES6 JavaScript
- **Styling**: CSS Custom Properties, Flexbox, CSS Grid
- **Animations**: CSS Transforms, RequestAnimationFrame, Intersection Observer
- **Icons**: Font Awesome 6.0.0 (CDN)
- **No Build Process**: Direct browser deployment
- **No External Dependencies**: Pure web technologies

## 🚀 Quick Start Guide

### Prerequisites
- Modern web browser (Chrome 60+, Firefox 60+, Safari 12+, Edge 79+)
- Local web server (for testing) - Python, Node.js, or VS Code Live Server
- Git (for cloning)

### 1. Clone the Repository

```bash
# Using HTTPS (recommended)
git clone https://github.com/IamLevin40/Portfolio-Cabales.git

# Or using SSH (if you have SSH keys set up)
git clone git@github.com:IamLevin40/Portfolio-Cabales.git

# Navigate to the project directory
cd Portfolio-Cabales
```

### 2. Set Up Local Development Server

Choose one of these options:

**Option A: Python (if you have Python installed)**
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x (if needed)
python -m SimpleHTTPServer 8000
```

**Option B: Node.js (if you have Node.js installed)**
```bash
# Install a simple HTTP server globally
npm install -g http-server

# Start the server
http-server -p 8000
```

**Option C: VS Code Live Server**
```bash
# If using VS Code
# 1. Install "Live Server" extension
# 2. Right-click on index.html 
# 3. Select "Open with Live Server"
```

### 3. Open in Browser

Navigate to `http://localhost:8000` in your web browser.

### 4. Customize Your Portfolio

Edit `js/config.js` with your personal information:

```javascript
const PORTFOLIO_CONFIG = {
  // Update with your details
  name: "Your Name",
  subtitle: "Your Professional Title",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  
  // Update social media links
  social: {
    facebook: "https://facebook.com/yourprofile",
    youtube: "https://youtube.com/@yourchannel", 
    instagram: "https://instagram.com/yourhandle",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername"
  },
  
  // Add your projects
  projects: [
    {
      id: 1,
      title: "Your Project Name",
      description: "Brief project description",
      image: "assets/images/your-project.png",
      technologies: ["Technology1", "Technology2"],
      liveUrl: "https://your-project-demo.com",
      githubUrl: "https://github.com/yourusername/project",
      featured: true,
      fullDescription: "Detailed project description...",
      features: [
        "Key feature 1",
        "Key feature 2"
      ],
      challenges: [
        "Challenge you faced and how you solved it"
      ],
      learnings: [
        "What you learned from this project"
      ]
    }
  ]
};
```

## 📸 Replace Images

Replace the following images in `assets/images/`:

- **`logo.png`**: Your personal logo (50x50px recommended)
- **`profile.jpg`**: Your profile picture for the hero section
- **`project_bg_rooted.png`**: Replace with your project screenshots

## 🎮 Current Projects Featured

### Rooted - Educational Word-Building Combat Game
**Technologies**: Unity, C#  
**Description**: An innovative educational game that merges word-building mechanics with environmental action and turn-based combat. Players battle eco-threats by forming new words from root words using prefixes and suffixes.

**Key Features**:
- Word-building mechanics with prefix/suffix modifiers
- Turn-based combat mapped to vocabulary strength  
- Environmental themes with educational prompts

**GitHub**: https://github.com/IamLevin40/Rooted

## 🏗️ Architecture Overview

### JavaScript Modules

**`config.js`** - Portfolio Configuration
- Personal information and contact details
- Social media links
- Project data with full descriptions, features, challenges, learnings
- Color scheme and animation settings
- SEO metadata

**`main.js`** - Core Functionality
- `ProjectsGenerator`: Dynamic project card creation
- `ThemeManager`: Dark/light theme switching
- `FloatingImages`: Cosmic background animations
- `SpaceDecorations`: Static decorative elements
- `NavbarScrollEffect`: Navigation transparency on scroll
- `ProjectImageResizer`: Dynamic hover height calculation
- `PerformanceOptimizer`: Lazy loading and debounced events

**`project-detail.js`** - Project Detail Pages
- `ProjectDetailManager`: Loads and displays individual projects
- Dynamic content rendering from config
- Smart section hiding (features/challenges/learnings only show if provided)
- URL-based navigation with localStorage fallback

### CSS Architecture

**`styles.css`** - Main Stylesheet
- CSS Custom Properties for theming
- Space + cyberpunk design system
- Responsive grid layouts
- Advanced hover animations
- Project card image expansion system
- Floating element animations

**`project-detail.css`** - Project-Specific Styles
- Detail page layouts
- Project navigation cards
- Enhanced typography for long-form content

## 🎯 Performance Features

- **60fps Animations**: RequestAnimationFrame for smooth floating elements
- **Lazy Loading**: Images load only when entering viewport
- **Debounced Events**: Optimized resize and scroll handlers
- **Intersection Observer**: Efficient scroll-based animations
- **CSS-only Transitions**: Hardware-accelerated hover effects
- **Modular Architecture**: Clean, maintainable JavaScript classes
- **Reduced Motion Support**: Respects user accessibility preferences

## 🎨 Customization Guide

### Adding New Projects

1. **Add project data** to the `projects` array in `js/config.js`
2. **Include project image** in `assets/images/` 
3. **Provide detailed content**:
   - `fullDescription`: Rich text description (supports HTML)
   - `features`: Array of key features (optional)
   - `challenges`: Array of challenges faced (optional) 
   - `learnings`: Array of lessons learned (optional)

### Modifying Theme Colors

Update the CSS custom properties in `css/styles.css`:

```css
:root {
  /* Customize primary colors */
  --bg-primary: #your-background-color;
  --color-primary: #your-primary-color;
  --color-neon: #your-neon-color;
  
  /* Typography */
  --text-white: #your-text-color;
  --text-light: #your-secondary-text;
}
```

### Customizing Animations

In `js/config.js`, modify the animations object:

```javascript
animations: {
  enableFloatingImages: true,           // Toggle floating background
  floatingImageCount: 8,                // Number of floating elements
  mouseSensitivity: 0.01,               // Mouse follow sensitivity
  floatingElements: ['🚀', '⭐', '🌟']  // Cosmic elements to display
}
```

## 🚀 Deployment Options

### GitHub Pages
```bash
# 1. Push to GitHub repository
git add .
git commit -m "Initial portfolio commit"
git push origin main

# 2. Go to repository Settings > Pages
# 3. Select "Deploy from a branch" > main
# 4. Your site will be live at: https://yourusername.github.io/repository-name
```

### Netlify
```bash
# Option 1: Drag & Drop
# 1. Build your project (if needed)
# 2. Drag the folder to https://netlify.com
# 3. Get instant deployment

# Option 2: Git Integration  
# 1. Connect your GitHub repository
# 2. Set build command: (none needed)
# 3. Set publish directory: /
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts - your site will be live instantly
```

### Traditional Web Hosting
```bash
# Upload all files via FTP/SFTP to your web host
# Ensure index.html is in the root directory
# All relative paths will work automatically
```

## 🔧 Browser Support

✅ **Fully Supported**:
- Chrome 60+ (2017)
- Firefox 60+ (2018) 
- Safari 12+ (2018)
- Edge 79+ (2020)

⚠️ **Partial Support**:
- Internet Explorer: Not supported (uses modern ES6+ features)

## 📱 Mobile Optimization

- **Touch-Friendly**: All interactive elements sized for touch
- **Performance**: Reduced animation complexity on mobile
- **Layout**: Responsive grid collapses to single column
- **Images**: Optimized loading and sizing
- **Typography**: Scaled font sizes for mobile readability

## 🤝 Contributing

This portfolio is designed to be easily forkable and customizable:

1. **Fork** the repository
2. **Customize** with your own content
3. **Submit improvements** via Pull Requests (optional)

Common improvements welcome:
- Additional animation effects
- New project card layouts  
- Enhanced accessibility features
- Performance optimizations

## 📧 Contact & Support

**Lean Vince Cabales**
- 📧 Email: levincabales40@gmail.com
- 📱 Phone: +63 960 603 5956
- 🌍 Location: Maloco, Ibajay, Philippines
- 💼 LinkedIn: [lean-vince-cabales-26bba1382](https://www.linkedin.com/in/lean-vince-cabales-26bba1382/)
- 🐙 GitHub: [IamLevin40](https://github.com/IamLevin40)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**🌌 Built with ❤️ and cosmic energy ✨**

*"Crafting digital experiences with passion and precision. Welcome to my space in the digital universe."*
