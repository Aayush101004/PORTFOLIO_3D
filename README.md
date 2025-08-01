# 3D Developer Portfolio
This is a stunning 3D interactive portfolio website built to showcase the skills, experience, and projects of an aspiring developer. It leverages modern web technologies like React, Three.js, and Tailwind CSS to create an engaging and memorable user experience.

## 🚀 About The Project
This project is a creative and interactive personal portfolio designed to leave a lasting impression. It features a navigable 3D island model on the homepage that responds to user interaction. The portfolio provides a comprehensive overview of the developer's technical abilities, professional journey, and completed projects, all presented in a sleek and modern interface.

## ✨ Key Features
Interactive 3D Homepage: A captivating homepage featuring a 3D island, a flying plane, and a bird, all rendered using react-three-fiber.

Dynamic Content Display: The homepage displays different information pop-ups based on the user's rotation of the 3D island.

Seamless Navigation: Smooth routing between the Home, About, Projects, and Contact pages, powered by react-router-dom.

Comprehensive 'About' Section: Details the developer's skills and experiences using a visually appealing vertical timeline.

Project Showcase: A dedicated section to display various projects with descriptions and links to live versions.

Interactive Contact Form: A "Get in Touch" page with a contact form that uses emailjs for sending messages. It features an animated 3D fox model that reacts to user input in the form fields.

Responsive Design: A fully responsive layout that works across various devices, built with Tailwind CSS.

Audio Integration: The homepage includes background music that can be toggled on or off by the user.

Custom Hooks: Utilizes custom hooks for functionalities like displaying alerts (useAlert).

## 🛠️ Technologies Used
Frontend: React, HTML5, CSS3

Styling: Tailwind CSS

Routing: React Router DOM

3D Graphics & Animation: React Three Fiber, React Three Drei

Timeline Component: React Vertical Timeline Component

Email Services: EmailJS

Version Control: Git & GitHub

## ⚙️ Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and npm installed on your machine.

npm

Bash

npm install npm@latest -g
Installation
Clone the repo

Bash

git clone https://github.com/Aayush101004/PORTFOLIO_3D.git
Install NPM packages

Bash

npm install
Set up environment variables. Create a .env file in the root of your project and add the following variables, which are required for the contact form to function:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
Start the development server

Bash

npm run dev
This will run the app in development mode. Open the local server address shown in your terminal to view it in the browser.

## 📄 Component & Page Overview
Core Components
Alert.jsx: A reusable alert component to display success or error messages, used in the contact form.

CTA.jsx: A "Call to Action" component found at the bottom of the About and Projects pages, encouraging users to connect.

HomeInfo.jsx: A component that displays different informational pop-ups on the home screen based on the currentStage prop, which changes as the user interacts with the 3D island.

Loader.jsx: A loading spinner component displayed as a fallback while Suspense is waiting for 3D models to load.

Navbar.jsx: A responsive navigation bar with links to the "About" and "Projects" pages.

3D Models
Bird.jsx: A 3D model of a bird that flies across the screen on the homepage.

Fox.jsx: An animated 3D fox model on the contact page that changes its animation based on user interaction with the form.

Island.jsx: The central 3D model on the homepage. It can be rotated by the user via mouse, touch, or keyboard arrows, which also controls the information displayed.

Plane.jsx: A 3D model of a plane that flies around the island. Its animation starts and stops based on the rotation of the island.

Sky.jsx: A 3D model that creates the sky background for the homepage, rotating along with the island.

Pages
Home.jsx: The main landing page, which features the interactive 3D scene composed of the Island, Sky, Bird, and Plane models.

About.jsx: Presents a personal introduction, a grid of skills, a timeline of experiences and certifications, and social media links.

Projects.jsx: Showcases a list of completed projects with descriptions and links.

Contact.jsx: Contains a contact form that uses emailjs to send messages and features the interactive 3D Fox model.
