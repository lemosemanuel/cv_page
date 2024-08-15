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