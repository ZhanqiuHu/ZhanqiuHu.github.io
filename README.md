# Personal Portfolio Website

A modern, responsive personal portfolio website designed for job applications and professional showcase.

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic content
- **Sections Include**:
  - Hero/Landing section with introduction
  - About section with personal stats
  - Professional experience timeline
  - Technical skills showcase
  - Featured projects portfolio
  - Contact form and information
- **Performance Optimized**: Fast loading with efficient code
- **SEO Friendly**: Proper HTML structure and meta tags

## 🚀 Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Customizing Your Website

#### 1. Personal Information
Edit `index.html` and replace the following placeholder content:

- **Name**: Replace "Your Name" throughout the file
- **Title/Role**: Update "Software Developer & Problem Solver"
- **Description**: Modify the hero description paragraph
- **Contact Info**: Update email, phone, and location in the contact section
- **Social Links**: Add your LinkedIn, GitHub, Twitter URLs

#### 2. About Section
- Update the about text paragraphs
- Modify the stats (years experience, projects completed, etc.)

#### 3. Experience Section
Replace the timeline items with your actual work experience:
- Job titles and companies
- Employment dates
- Job descriptions
- Key achievements

#### 4. Skills Section
- Add/remove technical skills in each category
- Modify categories as needed (Frontend, Backend, etc.)

#### 5. Projects Section
- Replace project cards with your actual projects
- Update project images (currently using placeholder icons)
- Add real project descriptions and technologies
- Update GitHub and demo links

#### 6. Profile Image
Replace the placeholder profile icon:
- Add your profile image to the project folder
- Update the `.profile-placeholder` in `index.html` with: `<img src="your-photo.jpg" alt="Your Name">`

#### 7. Colors and Styling
Customize the color scheme by editing `styles.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Text colors: `#2c3e50`, `#666`
- Background colors throughout the file

## 🌐 GitHub Pages Hosting

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository: `your-username.github.io` (replace with your actual GitHub username)
   - Example: If your username is "johnsmith", name it `johnsmith.github.io`
4. Make sure it's set to **Public**
5. Check "Add a README file"
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your website files (`index.html`, `styles.css`, `script.js`)
3. Add a commit message like "Add portfolio website"
4. Click "Commit changes"

**Option B: Using Git Command Line**
```bash
# Navigate to your website folder
cd /Users/zhanqiuhu/Documents/applications/website

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio website"

# Add your GitHub repository as remote (replace with your actual username)
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Website

Your website will be available at: `https://your-username.github.io`

**Note**: It may take a few minutes for your site to become available after the first deployment.

## 🛠 Customization Tips

### Adding More Sections
To add new sections (e.g., Education, Certifications):

1. Add a new section in `index.html` following the existing pattern
2. Add navigation link in the navbar
3. Add corresponding styles in `styles.css`
4. Update the JavaScript scroll handler if needed

### Contact Form Integration
The contact form currently shows a success message. To make it functional:

1. Use a service like [Formspree](https://formspree.io/) or [Netlify Forms](https://www.netlify.com/products/forms/)
2. Update the form action attribute
3. Modify the JavaScript form handler as needed

### Adding Analytics
To track visitors, add Google Analytics:

1. Get your tracking code from Google Analytics
2. Add the tracking script to the `<head>` section of `index.html`

### Performance Optimization
- Optimize images (use WebP format, compress sizes)
- Consider adding a favicon
- Minimize CSS and JavaScript for production

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📋 File Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎨 Design Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- Icons: [Font Awesome](https://fontawesome.com/)
- Color Palette: Custom gradient theme

## 📄 License

This project is open source and available under the MIT License.

---

**Happy job hunting! 🎯**

Remember to:
- Keep your content updated
- Add new projects as you complete them
- Update your experience regularly
- Customize the design to reflect your personality
- Test your website on different devices before sharing
