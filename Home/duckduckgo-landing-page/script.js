const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelectorAll('.nav__link');

const sections = document.querySelector('.mid-page');

var j = 2;

navToggle.addEventListener('click', () => {

    document.body.classList.toggle('nav-open');
    console.log(document.body.classList.contains('nav-open'));
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});


sections.addEventListener('click', () => {
    if (document.body.classList.contains('nav-open')) {
        document.body.classList.toggle('nav-open');
    }
});