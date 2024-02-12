// Loading

const loading = setInterval(() => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        document.body.classList.add("loading");
        window.clearInterval(loading)
    } else {
        document.body.classList.remove("loading");
    }
}, 500);

// Scroll Suave

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});




