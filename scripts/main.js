document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition - 50,
            behavior: "smooth"
        });
    }
});
