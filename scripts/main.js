// Manejador para mostrar/ocultar información adicional
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

// Manejador para búsqueda y resaltado de habilidades
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

// Manejador para el cambio de idioma
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('lang-switch');

    const loadTranslations = async (lang) => {
        const response = await fetch('translations.json');
        const translations = await response.json();
        return translations[lang];
    };

    const changeLanguage = async (lang) => {
        const translations = await loadTranslations(lang);
        document.querySelectorAll('[data-translate]').forEach((element) => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        // Cambiar el título de la página
        document.title = translations['page-title'];
    };

    languageSelect.addEventListener('click', (event) => {
        const currentLang = event.target.getAttribute('data-lang');
        const newLang = currentLang === 'es' ? 'en' : 'es';
        event.target.setAttribute('data-lang', newLang);
        event.target.textContent = newLang.toUpperCase();
        changeLanguage(newLang);
    });

    // Establecer el idioma inicial
    changeLanguage('es');
});
