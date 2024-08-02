document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close');

    // Open mobile menu
    hamburger.addEventListener('click', function () {
        mobileMenu.style.left = '0';
    });

    // Close mobile menu
    closeBtn.addEventListener('click', function () {
        mobileMenu.style.left = '-250px';
    });
});
