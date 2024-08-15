document.querySelectorAll('.see-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const id = button.getAttribute('data-id');
        const moreInfo = document.getElementById(id);
        
        if (moreInfo.style.display === "none") {
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

            // Resaltado del texto buscado
            const regex = new RegExp(query, 'gi');
            skill.innerHTML = skill.innerHTML.replace(/<span class="highlight">|<\/span>/g, ''); // Eliminar cualquier resaltado previo
            skill.innerHTML = skill.innerHTML.replace(regex, match => `<span class="highlight">${match}</span>`);
        } else {
            skill.style.display = 'none';
        }
    });
});