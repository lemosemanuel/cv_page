// Traducciones en JSON
const translations = {
    es: {
        'page-title': 'Curriculum Vitae - Emanuel Lemos',
        'nav-about': 'Sobre Mí',
        'nav-skills': 'Habilidades',
        'nav-experience': 'Experiencia',
        'nav-education': 'Formación',
        'nav-contact': 'Contacto',
        'hero-name': 'Emanuel Lemos',
        'hero-title': 'Tecnología y Business',
        'hero-description': 'Data Scientist y Full Stack Developer | Experto en Inteligencia Artificial y Desarrollo de Aplicaciones | Apasionado por la Innovación y el Equilibrio entre Tecnología y Vida Activa y Deporte',
        // Agrega más traducciones aquí
    },
    en: {
        'page-title': 'Curriculum Vitae - Emanuel Lemos',
        'nav-about': 'About Me',
        'nav-skills': 'Skills',
        'nav-experience': 'Experience',
        'nav-education': 'Education',
        'nav-contact': 'Contact',
        'hero-name': 'Emanuel Lemos',
        'hero-title': 'Technology and Business',
        'hero-description': 'Data Scientist and Full Stack Developer | Expert in Artificial Intelligence and Application Development | Passionate about Innovation and Balancing Technology with an Active and Sports-Oriented Life',
        // Agrega más traducciones aquí
    }
};

// Cargar idioma
function loadLanguage(language) {
    const lang = translations[language] || translations['es'];
    for (const [key, value] of Object.entries(lang)) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }
    document.getElementById('page-title').textContent = lang['page-title'];
}

// Guardar y cargar el idioma
document.getElementById('language-selector').addEventListener('change', (e) => {
    const language = e.target.value;
    localStorage.setItem('language', language);
    loadLanguage(language);
});

// Cargar idioma por defecto o guardado
window.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    document.getElementById('language-selector').value = savedLanguage;
    loadLanguage(savedLanguage);
});
