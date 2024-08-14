// Buscador de habilidades
document.getElementById('searchSkills').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    let skills = document.querySelectorAll('.skill-category');

    skills.forEach(skill => {
        if (skill.textContent.toLowerCase().includes(searchQuery)) {
            skill.style.display = '';
        } else {
            skill.style.display = 'none';
        }
    });
});

// Funcionalidad de acordeón para experiencias laborales
let acc = document.querySelectorAll('.accordion');
acc.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});
