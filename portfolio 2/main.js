let navMenu = document.getElementById('navMenu');
let toggleBtn = document.getElementById('toggleBtn');
function myMenuFunction() {
    if(navMenu.className === 'nav-menu'){
        navMenu.className += 'responsive';
        toggleBtn.className = 'bx bx-multiply';
    }else{
        navMenu.className = 'nav-menu';
        toggleBtn.className = 'bx bx-bars';
    }
}
function closeMenu() {
    navMenu.className = 'nav-menu';
}
let navLink = document.querySelectorAll('.nav-link');

function hideNav() {
navMenu.className = 'nav-menu';
toggleBtn.className = 'bx bx-bars';
}

navLink.forEach(link =>{
    link.addEventListener('click',hideNav);
})

window.addEventListener('scroll',headerShadow);
window.onload = headerShadow();

function headerShadow() {
    const navHeader = document.getElementById('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = '0 4px 10px #000000BB';
        navHeader.style.height = '70px';
        navHeader.style.lineHeight = '70px';
        navHeader.style.background= ' #00000078';
        navHeader.style.backdropFilter= ' blur(8px)';
    }else{
        navHeader.style.boxShadow = 'none';
        navHeader.style.height = '90px';
        navHeader.style.lineHeight = '90px';
        navHeader.style.background = ' #000000';
        navHeader.style.backdropFilter = ' blur(0px)';
    }
}

const sr = ScrollReveal({
    origin: 'top',
    distance:'75px',
    duration: 1650,
    reset: false
})
sr.reveal('.featured-name',{delay: 50})
sr.reveal('.featured-text-info',{delay: 50})
sr.reveal('.featured-text-btn',{delay: 60})
sr.reveal('.social-icons',{delay: 90})

sr.reveal('.project-box',{delay: 70})
sr.reveal('.service-box',{delay: 70})

sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1750,
    reset: false
})

srLeft.reveal('.about_info', {delay: 60})
srLeft.reveal('.contact-info', {delay: 60})

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 1750,
    reset: false
})

srLeft.reveal('.skills-title', {delay: 50})
srLeft.reveal('.skills-box', {delay: 50})
srLeft.reveal('.form', {delay: 50})
srLeft.reveal('.profile-image', {delay: 50})
srLeft.reveal('.about_info', {delay: 60})

const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    const  scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 100,
        sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY  <= sectionTop + sectionHeight){
            document.querySelector('.' + sectionId).classList.add('active-Link');
        }else{
            document.querySelector('.' + sectionId).classList.remove('active-Link');
        }
    })
}
window.addEventListener('load', scrollActive);
window.addEventListener('scroll',scrollActive);

const easingFunction = {

    easeInOutCubic: t => t < 0.5 ? 4*t*t*t: (t-1)*(2*t-2)*(2*t-2)+1,
}
let currentEasingFunction = 'easeInOutCubic';

function scrollToTarget ( target, offset = 0, duration = 2000, easingType = currentEasingFunction) {
    if(window.scrollAnimation){
        cancelAnimationFrame(window.scrollAnimation);
        window.scrollAnimation = null;
    }

    const targetPosition = typeof target ==='number'? target:target.getBoundingClientReact().top + window .scrollY;

    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - offset;
    
    if(Math.abs(distance) < 3){
        window.scrollTo(0, targetPosition - offset);
        return;
    }

    const startTime = performance.nav();
    const easingFunction = easingFunction [easingType]|| easingFunction. easeInOutCubic;
    
    function scrollAnimation(currentTime){
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed/duration,1);

        window.scrollTo(0,scrollAmout);

        if(progress < 1){
            window.scrollAnimation = requestAnimationFrame(scrollAnimation);
        }else{
            window.scrollAnimation = null;
        }
    }

    window.scrollAnimation.requestAnimationFrame(scrollAnimation);
    
    function scrollToHome(){
        scrollToTarget(0, 0, 2000);
    }

    function scrollToAbout(){
        const aboutSection = document.getElementById('about');
        scrollToTarget(aboutSection, 0, 2000);
    }

    function scrollToService(){
        const serviceSection = document.getElementById('service');
        scrollToTarget(serviceSection, 0, 2000);
    }

    function scrollToContact(){
        const contactSection = document.getElementById('contact');
        scrollToTarget(contactSection, 0, 2000);
    }}

    //Hire Me Button
    let blueBtn = document.querySelector('.blue-btn')
    blueBtn.addEventListener('click', function(){
        scrollToTarget(document.getElementById('contact'), 0, 2000);d
    });
