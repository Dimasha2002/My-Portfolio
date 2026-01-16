# Personal Portfolio

A modern, responsive portfolio website built with React and Vite.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive
- 🎨 Smooth animations and transitions
- 📧 Contact form
- 🚀 Fast loading with Vite
- 📊 Skills visualization with progress bars
- 💼 Projects showcase
- ⬆️ Scroll to top functionality

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization

### Personal Information

Edit the following in `src/App.jsx`:

1. **Name and Title:**
   ```jsx
   <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
   <h2>Your Job Title</h2>
   ```

2. **About Me Section:**
   - Update the description in the about section
   - Modify the statistics (projects completed, years experience, etc.)

3. **Skills:**
   - Update the `skills` array with your technologies and proficiency levels
   ```jsx
   const skills = [
     { name: "React", level: 90 },
     { name: "JavaScript", level: 85 },
     // Add your skills here
   ]
   ```

4. **Projects:**
   - Replace the `projects` array with your actual projects
   - Update project titles, descriptions, technologies, and links
   ```jsx
   const projects = [
     {
       title: "Your Project",
       description: "Project description",
       technologies: ["React", "Node.js"],
       github: "https://github.com/yourusername/project",
       live: "https://yourproject.com",
       image: "path/to/image.jpg"
     }
   ]
   ```

5. **Contact Information:**
   - Update email, phone, and location in the contact section

### Styling

- Colors and design can be customized in `src/App.css`
- The main color scheme uses CSS custom properties for easy theming

### Images

Replace placeholder images with your own:
- Profile photo: Update the `src` attribute in the hero section
- Project images: Add your project screenshots to `public/` folder and update paths

## Sections

1. **Hero** - Introduction with name, title, and call-to-action buttons
2. **About** - Personal description and statistics
3. **Skills** - Technology skills with progress bars
4. **Projects** - Portfolio of work with descriptions and links
5. **Contact** - Contact information and form

## Technologies Used

- React 19
- Vite
- CSS3 with modern features
- Responsive design
- Smooth scrolling

## License

This project is open source and available under the MIT License.

## Live Preview / Deployment

- Quick local preview:
   ```bash
   npm install
   npm run dev
   # open http://localhost:5173
   ```

- Deploy to Vercel (recommended):
   1. Push this repository to GitHub.
   2. Sign in to Vercel and import the repo (Vite preset). The included `vercel.json` uses `npm run build` and `dist`.
   3. Or use Vercel CLI from the project root:
       ```bash
       npm i -g vercel
       vercel
       # follow prompts, then `vercel --prod` to publish
       ```

Notes:
- `npm run build` creates the production files in `dist`.
- `vercel.json` includes a rewrite for single-page routing.
