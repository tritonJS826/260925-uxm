document.addEventListener('DOMContentLoaded', function() {
    const fadeElement = document.querySelector('.fade');

    if (fadeElement) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Optional: stop observing once visible
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        observer.observe(fadeElement);
    }
});