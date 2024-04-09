
// Navbar logo click event
document.addEventListener('DOMContentLoaded', function() {
    let logo = document.getElementById('navbar-logo');

    logo.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});

// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    let backtotop = document.getElementById('back-to-top');

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) {
            backtotop.style.display = 'block';
        } else {
            backtotop.style.display = 'none';
        }
    };
});

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}