document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sample project data
const projects = [
    {
        name: "Currency Exchanger",
        image: "assets/images/currency_exchange.png",
        description: "Currency Exchanger is an Android application designed to convert currencies by fetching the latest exchange rates from Exchange Rates API",
        technologies: "Android Studio, Retrofit, Kotlin",
        link: "https://github.com/truongpnx/CurrencyExchange"
    },
    {
        name: "Chinese Chess",
        image: "assets/images/chinese_chess.png",
        description: "Chinese Chess power by Godot, apply Machine Learning for automatically playing",
        technologies: "Godot Engine, ML",
        link: "https://github.com/truongpnx/chinesechess"
    },
    {
        name: "String Art",
        image: "assets/images/string_art.png",
        description: "Machine Learning in String Art",
        technologies: "ML, Pytorch, OpenCV",
        link: "https://colab.research.google.com/drive/1jTJ_oUTo-7z7T36HJhaKH-Wt-WkQXlCi?usp=sharing"
    },
    {
        name: "Artistic Text Recognition",
        image: "assets/images/vicalligraphy.png",
        description: "Skeleton Guided Transformer base on Corner Guided Transfomer for artistic text recognition",
        technologies: "OCR, SceneTextRecogniton, Pytorch, Transfomer, Docker, PaddleOCR",
        link: "https://github.com/truongpnx/GraduateThesis"

    },
    {
        name: "Few-shot Learning with Neural Network",
        image: "assets/images/fewshot.png",
        description: "Few-shot image classifi cation using Prototypical Networks and Model-Agnostic Meta-Learning",
        technologies: "AI, Few-shot Learning, Neural Network, Python, Pytorch",
        link: "https://github.com/truongpnx/Fewshot_Omniglot"
    },
    {
        name: "Snake Game",
        image: "assets/images/snake_game.gif",
        description: "The Snake Game was built with SDL and apply Deep-First-Search and A* Search for automatically playing",
        technologies: "C++, DFS, A*, Game, SDL",
        link: "https://github.com/truongpnx/Games/tree/main/SnakeGame"
    }
];

// import { renderProjects } from "./js/project_card";


const licenses = [
    {
        name: "TOEIC Listening and Reading",
        description: "Test of English for International Communication.",
        link: "https://drive.google.com/file/d/1mLAES8m_NzoRP-oMKLYzUTvzomuivvij/view?usp=drive_link"
    },
    {
        name: "TOEIC Speaking and Writing ",
        description: "Test of English for International Communication.",
        link: "https://drive.google.com/file/d/1IpN3TgCGPO2r0AYnimAcGhi4WvEw7hVa/view?usp=drive_link"
    },
    {
        name: "CS50's Introduction to Artificial Intelligence with Python",
        description: "Certificate for completing course.",
        link: "https://certificates.cs50.io/6f53df6d-adef-42b5-ba43-70c92bcfb3b4"
    },
    {
        name: "Cloud Computing Fundamentals",
        description: "edX Verified Certificate for Google Cloud Computing Foundations: Cloud Computing Fundamentals",
        link: "https://courses.edx.org/certificates/8d0cec0633994eafa461bb1a0a3ffb7e"
    },

    
    // Add more licenses as needed
];

// Render licenses when the document is ready
document.addEventListener('DOMContentLoaded', () => {
    renderLicenses(licenses, 'licenses-container');
    renderProjects(projects, 'projects-container');

});

