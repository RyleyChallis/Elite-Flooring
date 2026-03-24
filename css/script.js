const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
// Select all the links inside your mobile menu
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'active' class to trigger the CSS slide-up animation
        navList.classList.remove('active');
        
        // Optional: Reset the hamburger icon back to the 'bars' icon
        const icon = mobileMenu.querySelector('i');
        if (icon.classList.contains('fa-xmark')) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});