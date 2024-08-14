document.querySelectorAll('.see-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Próximamente: más detalles sobre mi experiencia.');
    });
});
