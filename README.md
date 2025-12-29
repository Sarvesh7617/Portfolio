# 💼 My Developer Portfolio

This is my personal portfolio website built with **Vite + React**, showcasing my projects, skills, and contact information.
## 📸 Screenshots

### 🏠 Home Page
<img width="1894" height="949" alt="Screenshot 2025-12-29 202006" src="https://github.com/user-attachments/assets/6f04e869-ef20-44f1-abec-471ae1aa25a2" />



### 📂 Projects Section
<img width="1882" height="959" alt="Screenshot 2025-12-29 202046" src="https://github.com/user-attachments/assets/124b3e59-7c7d-4340-aeb8-55c9015ae4a1" />




## 🚀 Features

- Smooth animations using Framer Motion
- Responsive design for all devices
- Projects section with live demo link
- Contact form with form validation
- Dark mode support
- 🔝 "Go to Top" button for easy navigation
- Animated UI elements and transitions


## 🚀 Tech Stack

- ⚛️ React(Vite)
- 🎨 Tailwind CSS
- JavaScript (ES6+)

  ## UI & Animation
  
- Framer Motion (animations & transitions)
- Swiper (project carousel)
- React Icons
- React Type Animation
- Hamburger React (mobile menu)

 ## Forms & UX

- React Hook Form
- EmailJS
- React Toastify (notifications)

 ## Visual Effects
 
- tsParticles (@tsparticles/react)


## 🛠️ Installation

To run this project locally:  

1️. Clone the repository:  
```bash
git clone https://github.com/Sarvesh7617/BootStrap_E-commerce_Website.git
```
2. Navigate to the project directory:
```bash
cd your-portfolio
```
3. Install dependencies
```bash
npm install
```
4. Install dependencies
```bash
npm run dev
```


## 🔗 Live Website

👉 [Click here to visit my portfolio](https://portfolio-xyik.vercel.app/#project)



## 📁 Project Structure

```bash
public/                             # Static files served directly
│
src/                                # Source code
├── assets/                         # Resume pdf
├── components/                     # Reusable React components
│   ├── particle/
│   │   └── Particle.jsx            # Background particle animation(tsParticles)
│   ├── Header.jsx                  # Handles section navigation and active section highlight
│   ├── Home.jsx                    # Contains all portfolio sections (Hero, About, Skills, Projects, Contact)
│   ├── Carousal.jsx                # Project slider / carousel component (Swiper)
│   ├── Footer.jsx                  # Footer section with social links and copyright
│   ├── GototopBtn.jsx              # Floating button to smoothly scroll back to top
│   ├── ThemeBtn.jsx                # Dark / Light mode toggle button
│   ├── ThemeProvider.jsx           # Context provider for theme state (dark / light)
│   └── UseContext.js               # Custom React context for global state management
├── App.jsx                         # Combines Header, Home, Footer and global UI elements
├── App.css                         # App-specific styles (if any beyond Tailwind)
├── index.css                       # Tailwind base styles
└── main.jsx                        # Entry point for React
```
