# Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. Features a dark/light theme toggle, smooth animations, floating background elements, and mobile-first responsive design.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Smooth Animations**: Floating background elements that respond to mouse movement
- **Sticky Navigation**: Navigation bar with hover effects and smooth scrolling
- **Projects Showcase**: Grid layout to display your projects with details
- **Social Media Integration**: Vertical stack of social media links
- **Performance Optimized**: Lazy loading, debounced events, and smooth animations
- **Easy Customization**: Configuration file for quick personalization

## 📁 Project Structure

```
Portfolio/
├── assets/
│   ├── images/          # Project images and logo
│   └── icons/           # Icon files
├── css/
│   └── styles.css       # Main stylesheet with CSS variables
├── js/
│   ├── config.js        # Configuration file for easy customization
│   └── main.js          # Main JavaScript functionality
├── projects/            # Individual project detail pages
├── index.html           # Main landing page
└── README.md           # This file
```

## 🎨 Color Scheme

The portfolio uses the following color palette:
- **Background**: `#21212E` (Dark purple-blue)
- **Primary**: `#393F8A` (Purple-blue)
- **Secondary**: `#65558D` (Light purple)
- **Text**: `#ffffff` (White)
- **Text Light**: `#e0e0e0` (Light gray)

## 🛠️ Customization

### Easy Setup

1. **Personal Information**: Edit `js/config.js` to update:
   - Your name and description
   - Social media links
   - Project details
   - Contact information

2. **Images**: Replace placeholder images in `assets/images/`:
   - `logo.jpg` - Your logo (50x50px recommended)
   - `project1.jpg`, `project2.jpg`, etc. - Project screenshots

3. **Colors**: Modify color variables in `css/styles.css` under `:root` section

### Advanced Customization

#### Adding New Projects

Edit the `projects` array in `js/config.js`:

```javascript
{
  id: 4,
  title: "New Project",
  description: "Description of your new project",
  image: "assets/images/project4.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://your-project-url.com",
  githubUrl: "https://github.com/yourusername/project",
  featured: true
}
```

#### Modifying Theme Colors

Update CSS variables in `css/styles.css`:

```css
:root {
  --bg-primary: #your-color;
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

#### Disabling Floating Animation

Set `enableFloatingImages: false` in `js/config.js`

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 768px and below
- **Desktop**: 769px and above

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Update Configuration**: Edit `js/config.js` with your information
3. **Add Your Images**: Replace placeholder images in `assets/images/`
4. **Open in Browser**: Open `index.html` in your web browser
5. **Deploy**: Upload to your hosting service (GitHub Pages, Netlify, Vercel, etc.)

## 📦 Dependencies

- **Font Awesome 6.0.0**: For icons (loaded via CDN)
- **No other external dependencies**: Pure HTML, CSS, and JavaScript

## 🔧 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🎯 Performance Features

- **Lazy Loading**: Images load only when needed
- **Throttled Events**: Resize and scroll events are optimized
- **CSS Variables**: Easy theme switching without JavaScript
- **Smooth Animations**: RequestAnimationFrame for 60fps animations

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, pull requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you need help customizing your portfolio:

1. Check the `js/config.js` file for most customizations
2. Look at the CSS variables in `css/styles.css` for styling changes
3. Review the project structure above for file organization

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your main branch as source
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Create account at netlify.com
2. Drag and drop your project folder to Netlify
3. Your site will be deployed automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

---

**Happy Coding! 🎉**

Built with ❤️ for developers who want a stunning portfolio without the complexity.
