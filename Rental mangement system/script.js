const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-links a');

function showPage(pageId) {
    pages.forEach(page => {
        page.classList.toggle('active', page.id === pageId);
    });

    navLinks.forEach(link => {
        const target = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', target === pageId);
    });

    if (pageId !== 'home') {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetPage = link.getAttribute('href').replace('#', '');
        showPage(targetPage);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const initialPage = window.location.hash.replace('#', '') || 'home';
    showPage(initialPage);
    document.getElementById('contactForm').addEventListener('submit', event => {
        event.preventDefault();
        const submitBtn = event.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.classList.add('btn-loading');
        submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Sending...';

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            submitBtn.classList.remove('btn-loading');
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            event.target.reset();

            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
            }, 3000);
        }, 2000);
    });
});