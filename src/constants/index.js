import {
    c,
    cpp,
    css,
    form,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    news,
    nextjs,
    portfolio,
    react,
    resume,
    tailwindcss,
    tetris,
    threejs,
    tictactoe
} from "../assets_3d_portfolio/assets/icons";
import { microsoft, sdg, sih, udemy } from "../assets_3d_portfolio/assets/images";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "SDG Hackathon",
        icon: sdg,
        iconBg: "#F8E0C5",
        date: "22 March 2024 - 24 March 2024",
        points: [
            "Developed a feature-rich website using TypeScript and JavaScript, ensuring robust functionality and maintainability.",
            "Implemented real-time data fetching from weather APIs to dynamically display temperature and humidity for various cities.",
            "Designed an intuitive user interface with responsive layouts, enhancing user experience across different devices.",
            "Optimized API requests and data rendering to ensure fast performance and seamless updates of weather conditions.",
            ],
    },
    {
        title: "Azure AI-900 Fundamentals Course",
        company_name: "Microsoft",
        icon: microsoft,
        iconBg: "#E3F2FD",
        date: "Jun 2024 - Jul 2024",
        points: [
            "Successfully completed an Summer Industrial Internship, gaining hands-on experience in industry-relevant topics.",
            "Explored real-world applications of technologies through guided projects and case studies.",
            "Gained insights into best practices, workflows, and problem-solving techniques used in the industry.",
            "Earned a certification, validating expertise and enhancing professional credibility.",
        ],
    },
    {
        title: "Machine Learning A-Z Course",
        company_name: "Udemy",
        icon: udemy,
        iconBg: "#D8BFD8",
        date: "Jun 2024 - Nov 2024",
        points: [
            "Gained hands-on experience in AI, Python, and R for machine learning applications.",
            "Explored supervised and unsupervised learning techniques, including regression, classification, and clustering.",
            "Learned to implement machine learning models using libraries like Scikit-Learn, TensorFlow, and R programming.",
            "Covered end-to-end machine learning workflows and ChatGPT applications for AI-driven insights.",
        ],
    },
    {
        title: "Smart India Hackathon",
        icon: sih,
        iconBg: "#E6CFA1",
        date: "Aug 2024 - Sep 2024",
        points: [
            "The app offers tailored interfaces for both caregivers and elderly users, ensuring accessibility and ease of use for different user groups.",
            "Provides users with essential safety tips to prevent falls and promote a safer living environment.",
            "Includes exercise routines aimed at improving balance and strength, thereby reducing the risk of falls.",
            "Allows users to adjust settings according to their preferences, enhancing the overall user experience.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Aayush101004',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aayush-khanna-87275824b',
    },
    {
        name: 'Resume',
        iconUrl: resume,
        link: 'https://drive.google.com/file/d/1BDiYMf-ZRnVGo8xZ1PB0VRyXT4OAV_rQ/view',
    }
];

export const projects = [
    {
        iconUrl: tetris,
        theme: 'btn-back-red',
        name: 'Tetris Game',
        description: 'I designed a Tetris game with score tracking, row clearance, player level, a "GAME OVER" screen with the final score, and a preview box showing the next tetromino.',
        link: 'https://github.com/Aayush101004/TETRIS',
    },
    {
        iconUrl: tictactoe,
        theme: 'btn-back-blue',
        name: 'Tic-Tac-Toe',
        description: 'Developed a web-based Tic-Tac-Toe game with interactive UI, sound effects, and animations for an engaging experience.',
        link: 'https://github.com/Aayush101004/TICTACTOE',
    },
    {
        iconUrl: form,
        theme: 'btn-back-green',
        name: 'Form with Captcha',
        description: 'Developed a secure form with error-specific prompts and a random CAPTCHA to ensure accurate user validation before submission.',
        link: 'https://github.com/Aayush101004/FORMCAP',
    },
    {
        iconUrl: portfolio,
        theme: 'btn-back-black',
        name: 'My Portfolio',
        description: 'Developed a 3D portfolio using Three.js with interactive 3D effects, featuring About, Projects, and Contact sections, and integrated EmailJS for messaging.',
        link: 'https://github.com/Aayush101004/PORTFOLIO_3D',
    },
    {
        iconUrl: news,
        theme: 'btn-back-pink',
        name: 'News App',
        description: 'Developed a React-based news application that fetches and displays the latest news articles from various sources, providing users with up-to-date information.',
        link: 'https://github.com/Aayush101004/my-news-app',
    },
];