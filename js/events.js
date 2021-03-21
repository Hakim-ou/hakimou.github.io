const contact = document.querySelector('#contact-me');
const email = document.querySelector('#email-me');

contact.addEventListener('click', function() {
    alert('Contact me at : hakim.ouhida@grenoble-inp.org');
})
email.addEventListener('click', function() {
    alert('Contact me at : hakim.ouhida@grenoble-inp.org');
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("mainNavbar").style.opacity = 0.7;
        document.getElementById("mainNavbar").style.background = "#8d4a4a";
    } else {
        document.getElementById("mainNavbar").style.opacity = 1;
        document.getElementById("mainNavbar").style.background = "#b9babe";
    }
} 