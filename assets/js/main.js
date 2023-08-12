/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className
    console.log(itemClass);
    for (i=0;i < skillsContent.length;i++) {
        console.log(skillsContent[i]);
        if ("skills__close" in skillsContent.classList){
            skillsContent.classList.remove("skills__close");
            skillsContent.classList.add("skills__open");

        } else {
            skillsContent.classList.remove("skills__open");
            skillsContent.classList.add("skills__close");
        }
    }
    if ("skills__close" in this.parentNode.classList){
        this.parentNode.classList.remove("skills__close");
        this.parentNode.classList.add("skills__open");

    } else {
        this.parentNode.classList.remove("skills__open");
        this.parentNode.classList.add("skills__close");
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 