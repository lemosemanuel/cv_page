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
