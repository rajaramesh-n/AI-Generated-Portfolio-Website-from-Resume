document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.remove('fa-times');
                hamburger.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active navigation link highlighting on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) { // Adjust offset for better timing
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Project Modal Logic
    const projectsData = [
        {
            id: 'smart-crop',
            title: 'Smart Crop Predictor with Alternative Suggestions and Economic Forecast',
            description: 'Developed an ML-based solution for crop prediction based on soil nutrients and environmental conditions. Provides alternative crop recommendations, detailed economic analysis, and integrates data visualization with an interactive Streamlit web application. Performed extensive EDA.',
            outcomes: 'Created a decision-support tool for farmers to maximize yield and profit, provided transparent cost insights, increased model interpretability, and supports agricultural sustainability.',
            techStack: ['Python', 'Machine Learning', 'Streamlit', 'Matplotlib', 'Seaborn'],
            githubLink: 'https://github.com/rajaramesh-n/Smart-Crop-Predictor-with-Alternative-Suggestions', // Placeholder, needs actual link
            liveDemoLink: 'https://huggingface.co/spaces/RajaRamesh123/Smart-Crop-Predictor', // Placeholder, needs actual link if available
            image: 'https://via.placeholder.com/600x400/20c997/ffffff?text=Smart+Crop+Predictor', // Placeholder image
        },
        {
            id: 'plastic-waste',
            title: 'Plastic Waste Sorting Classifier using Artificial Neural Networks',
            description: 'Designed an AI system to classify plastic types for recycling using chemical composition and physical properties from a tabular dataset. Built and trained a multi-class ANN model with TensorFlow/Keras, implementing preprocessing steps like feature scaling and one-hot encoding.',
            outcomes: 'Achieved high classification accuracy for 6 plastic types, demonstrated potential for automated sorting, constructed a reusable ANN pipeline, and prepared for real-time deployment using Streamlit and Hugging Face.',
            techStack: ['Python', 'TensorFlow', 'Keras', 'Streamlit', 'Hugging Face'],
            githubLink: 'https://github.com/rajaramesh-n/Plastic-Waste-Sorting-Classifier-using-ANN', // Placeholder
            liveDemoLink: 'https://huggingface.co/spaces/RajaRamesh123/Plastic-Waste-Sorting-Classifier', // Placeholder
            image: 'https://via.placeholder.com/600x400/007bff/ffffff?text=Plastic+Waste+Classifier', // Placeholder image
        },
        {
            id: 'agentic-ai-ppt',
            title: 'Agentic AI PowerPoint Automation System using n8n',
            description: 'Programmed an Agentic AI system for autonomous PowerPoint generation from user prompts using n8n and Large Language Models. Features a Streamlit interactive web interface for real-time requests, theme selection, and slide configuration. Built an automated n8n backend for multi-agent orchestration and integrated Python scripts for .pptx file generation.',
            outcomes: 'Reduced manual presentation creation time by 80% through full automation. Implemented real-time API handling with webhook-based LLM processing.',
            techStack: ['Python', 'Streamlit', 'n8n', 'Large Language Models', 'JSON', 'Webhooks'],
            githubLink: 'https://github.com/rajaramesh-n/Agentic-AI-PowerPoint-Automation-System-using-n8n', // Placeholder
            liveDemoLink: 'https://huggingface.co/spaces/RajaRamesh123/Agentic-AI-PPT', // Placeholder
            image: 'https://via.placeholder.com/600x400/dc3545/ffffff?text=Agentic+AI+PPT+Automation', // Placeholder image
        }
    ];

    const projectModal = document.getElementById('project-modal');
    const closeButton = document.querySelector('.close-button');
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');

    viewProjectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.closest('.project-card').dataset.projectId;
            const project = projectsData.find(p => p.id === projectId);

            if (project) {
                document.getElementById('modal-project-image').src = project.image;
                document.getElementById('modal-project-title').textContent = project.title;
                document.getElementById('modal-project-description').textContent = project.description;
                document.getElementById('modal-project-outcomes').textContent = project.outcomes;

                const techStackList = document.getElementById('modal-project-tech-stack');
                techStackList.innerHTML = ''; // Clear previous items
                project.techStack.forEach(tech => {
                    const li = document.createElement('li');
                    li.textContent = tech;
                    techStackList.appendChild(li);
                });

                document.getElementById('modal-github-link').href = project.githubLink;
                document.getElementById('modal-live-demo-link').href = project.liveDemoLink;

                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling background
            }
        });
    });

    closeButton.addEventListener('click', () => {
        projectModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal if clicked outside
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});