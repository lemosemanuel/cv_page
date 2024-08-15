document.querySelectorAll('.see-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const id = button.getAttribute('data-id');
        const moreInfo = document.getElementById(id);
        
        if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
            moreInfo.style.display = "block";
            button.textContent = "Ver menos";
        } else {
            moreInfo.style.display = "none";
            button.textContent = "Ver más";
        }
    });
});

document.getElementById('skill-search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const skills = document.querySelectorAll('.skills-grid .skill');

    skills.forEach(skill => {
        const skillText = skill.textContent.toLowerCase();

        if (skillText.includes(query)) {
            skill.style.display = 'block';

            // Resaltado del texto buscado sin romper el HTML
            const skillNameElement = skill.querySelector('p');
            if (skillNameElement) {
                const originalHTML = skillNameElement.innerHTML;
                const regex = new RegExp(query, 'gi');

                // Restablece el contenido original antes de aplicar el resaltado
                skillNameElement.innerHTML = originalHTML.replace(/<span class="highlight">|<\/span>/g, '');

                // Aplica el resaltado
                skillNameElement.innerHTML = skillNameElement.textContent.replace(regex, match => `<span class="highlight">${match}</span>`);
            }

        } else {
            skill.style.display = 'none';
        }
    });
});

function toggleLanguage() {
    const isEnglish = document.querySelector('.en').style.display === 'block';

    document.querySelectorAll('.es').forEach(elem => elem.style.display = isEnglish ? 'none' : 'block');
    document.querySelectorAll('.en').forEach(elem => elem.style.display = isEnglish ? 'block' : 'none');

    const button = document.getElementById('language-toggle');
    button.textContent = isEnglish ? 'Cambiar a Inglés' : 'Switch to English';
}


document.addEventListener("DOMContentLoaded", function() {
    const languageToggle = document.getElementById('language-toggle');
    const isEnglish = localStorage.getItem('language') === 'en';
    
    // Language texts
    const texts = {
        es: {
            "page-title": "Curriculum Vitae - Emanuel Lemos",
            "hero-name": "Emanuel Lemos",
            "hero-title": "Tecnología y Business",
            "hero-description": "Data Scientist y Full Stack Developer | Experto en Inteligencia Artificial y Desarrollo de Aplicaciones | Apasionado por la Innovación y el Equilibrio entre Tecnología y Vida Activa y Deporte",
            "about-title": "Sobre Mí",
            "about-description": "Soy un profesional dedicado con una vasta experiencia en tecnología y negocios. Mi pasión radica en aplicar inteligencia artificial y técnicas avanzadas de desarrollo para crear soluciones que impulsen la innovación en diversos sectores. Equilibro mi vida profesional con una fuerte dedicación al deporte y la vida saludable.",
            "skills-title": "Habilidades Técnicas",
            "experience-title": "Experiencia Laboral",
            "education-title": "Formación Académica",
            "contact-title": "Contacto",
            "experience-job1": "Ingeniero de Software en el Departamento de Defensa Aeroespacial",
            "experience-date1": "Indra (España) | Enero 2023 - Agosto 2024",
            "experience-description1": "Desarrollo de emuladores para señales satelitales...",
            "experience-detail1": "Durante mi tiempo en Indra, trabajé en el Departamento de Defensa Aeroespacial, participando en proyectos críticos relacionados con la gestión y operación de satélites. Mi rol principal incluía el desarrollo de emuladores para señales satelitales, los cuales eran esenciales para simular el comportamiento de los sistemas en escenarios reales...",
            "education-item1": "Master en Data Science (UBA)",
            "education-item2": "Data Science Curso (Digital House)",
            "education-item3": "Licenciado en Administración de empresas",
        },
        en: {
            "page-title": "Curriculum Vitae - Emanuel Lemos",
            "hero-name": "Emanuel Lemos",
            "hero-title": "Technology and Business",
            "hero-description": "Data Scientist and Full Stack Developer | Expert in Artificial Intelligence and Application Development | Passionate about Innovation and Balancing Technology with Active Life and Sport",
            "about-title": "About Me",
            "about-description": "I am a dedicated professional with extensive experience in technology and business. My passion lies in applying artificial intelligence and advanced development techniques to create solutions that drive innovation across various sectors. I balance my professional life with a strong dedication to sports and healthy living.",
            "skills-title": "Technical Skills",
            "experience-title": "Work Experience",
            "education-title": "Academic Background",
            "contact-title": "Contact",
            "experience-job1": "Software Engineer in Aerospace Defense Department",
            "experience-date1": "Indra (Spain) | January 2023 - August 2024",
            "experience-description1": "Development of satellite signal emulators...",
            "experience-detail1": "During my time at Indra, I worked in the Aerospace Defense Department, participating in critical projects related to satellite management and operation. My main role included the development of emulators for satellite signals, which were essential for simulating the behavior of systems in real-world scenarios...",
            "education-item1": "Master in Data Science (UBA)",
            "education-item2": "Data Science Course (Digital House)",
            "education-item3": "Bachelor's Degree in Business Administration",
        }
    };

    function setLanguage(lang) {
        document.getElementById('page-title').textContent = texts[lang]["page-title"];
        document.getElementById('hero-name').textContent = texts[lang]["hero-name"];
        document.getElementById('hero-title').textContent = texts[lang]["hero-title"];
        document.getElementById('hero-description').textContent = texts[lang]["hero-description"];
        document.getElementById('about-title').textContent = texts[lang]["about-title"];
        document.getElementById('about-description').textContent = texts[lang]["about-description"];
        document.getElementById('skills-title').textContent = texts[lang]["skills-title"];
        document.getElementById('experience-title').textContent = texts[lang]["experience-title"];
        document.getElementById('education-title').textContent = texts[lang]["education-title"];
        document.getElementById('contact-title').textContent = texts[lang]["contact-title"];
        document.getElementById('experience-job1').textContent = texts[lang]["experience-job1"];
        document.getElementById('experience-date1').textContent = texts[lang]["experience-date1"];
        document.getElementById('experience-description1').textContent = texts[lang]["experience-description1"];
        document.getElementById('experience-detail1').textContent = texts[lang]["experience-detail1"];
        document.getElementById('education-item1').textContent = texts[lang]["education-item1"];
        document.getElementById('education-item2').textContent = texts[lang]["education-item2"];
        document.getElementById('education-item3').textContent = texts[lang]["education-item3"];
        languageToggle.textContent = lang === 'es' ? 'English' : 'Español';
        localStorage.setItem('language', lang);
    }

    languageToggle.addEventListener('click', function() {
        const currentLang = localStorage.getItem('language') === 'en' ? 'es' : 'en';
        setLanguage(currentLang);
    });

    // Set language on page load
    setLanguage(isEnglish ? 'en' : 'es');
});
