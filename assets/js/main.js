/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})


function initializeInteractiveMenu() {
    const menuButtons = document.querySelectorAll('.menu-button');
    const menuSections = document.querySelectorAll('.menu-items');

    const menuItemsData = {
        pljeskavica: {
            description: "Lepinja 150 g, meso 200 g, umaci 70 g, salate po izboru 70 g ",
            ingredients: ""
        },
        punjena: {
            description: "Tortilja, meso 200 g, umaci 70 g, salate po izboru 70 g",
            ingredients: ""
        },
        cevapi: {
            description: "Hambi pecivo 150 g , pljeskavica junetina 100 g, meso kebab 100 g, umaci 70 g, salate po izboru 70 g",
            ingredients: ""
        },
        a: {
            description: "Hambi pecivo 150 g , pljeskavica junetina 100 g, umaci 70 g, salate po izboru 70 g",
            ingredients: ""
        },
        b: {
            description: "Hambi pecivo 150 g, pljeskavica junetina 100 g, sir gouda 18,75 g, umaci 70 g, salate po izboru 70 g",
            ingredients: ""
        },
        c: {
            description: "Hambi pecivo 150 g , 2x pljeskavica junetina 100 g, umaci 70 g, salate po izboru 70 g",
            ingredients: ""
        },
        d: {
            description: "Hambi pecivo 150 g, 2x pljeskavica junetina 100 g, 2x sir gouda 18,75 g, umaci 70 g, salate po izboru 70g",
            ingredients: ""
        },
        e: {
            description: "Kebab meso 200 g, salate po izboru 150g, umaci 70 g",
            ingredients: ""
        },
        f: {
            description: "Pogača 150 g, umaci 100 g, salate po izboru 100 g",
            ingredients: ""
        },
        g: {
            description: "Zelena salata, rajčica, kupus, luk, krastavci, kukuruz 50 g",
            ingredients: ""
        },
        h: {
            description: "Blagi umak, ljuti umak, majonza, ketchup, tartar, senf, ajvar 100 g",
            ingredients: ""
        },
        i: {
            description: "Feta sir(porcija 70 g)",
            ingredients: ""
        },
        j: {
            description: "Lepinja grill, hambi pecivo grill(dodatak uz salate, 140 g)",
            ingredients: ""
        },
        k: {
            description: "Sir gouda za cheeseburger (18,75 g)",
            ingredients: ""
        },
        l: {
            description: "Negazirana voda 0,5 l",
            ingredients: ""
        },
        m: {
            description: "Mineralna voda 0,5 l",
            ingredients: ""
        },
        n: {
            description: "Coca-cola, Fanta, Schweppes, Ledeni čaj 0,5 l",
            ingredients: ""
        },
        // Add more menu items as needed
    };

    // Hide all menu sections initially
    menuSections.forEach(section => {
        section.style.display = 'none';
    });

    menuButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            menuSections.forEach((section, sectionIndex) => {
                if (sectionIndex === index) {
                    section.style.display = section.style.display === 'none' ? 'block' : 'none';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });

    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const itemData = menuItemsData[this.dataset.item];
            const detailsElement = this.nextElementSibling;
            
            // Toggle visibility of details
            detailsElement.style.display = detailsElement.style.display === 'none' ? 'block' : 'none';
            
            // Update content only if details are being shown
            if (detailsElement.style.display === 'block') {
                detailsElement.querySelector('.detail-description').textContent = itemData.description;
                detailsElement.querySelector('.detail-ingredients').textContent = itemData.ingredients;
            }
            
            // Hide details of other menu items in the same section
            const parentSection = this.closest('.menu-items');
            parentSection.querySelectorAll('.menu-details').forEach(details => {
                if (details !== detailsElement) {
                    details.style.display = 'none';
                }
            });
        });
    });
}

// Initialize the interactive menu when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeInteractiveMenu);

/*==================== SCROLL REVEAL ANIMATION ====================*/


sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})
