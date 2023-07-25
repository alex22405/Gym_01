const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const imgIndex = document.querySelector('.bloc-modale img');

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {

        imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
        modaleEquipement.classList.add('active-modale');

    })
})

modaleEquipement.addEventListener('click', () => {
    modaleEquipement.classList.remove('active-modale');
})


// Anim navbar

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if(window.scrollY > 30) {
        nav.classList.add('anim-nav');
    } else {
        nav.classList.remove('anim-nav');
    }

})


// Responsive menu toggle
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}




const sr = ScrollReveal();

sr.reveal('nav', {
    origin: 'top',
    distance: '30px',
    duration: 4000,
});

sr.reveal('.bloc-gauche-accueil_title', {
    origin: 'left',
    distance: '30px',
    duration: 4000,
});

sr.reveal('.bloc-gauche-accueil_price', {
    origin: 'left',
    distance: '30px',
    duration: 4000,
});

sr.reveal('.btn-accueil', {
    origin: 'bottom',
    distance: '30px',
    duration: 4000,
});

sr.reveal('.titre-section-info', {
    origin: 'bottom',
    distance: '30px',
    duration: 4000,
});

sr.reveal('.section-info', {
    origin: 'left',
    distance: '30px',
    duration: 4000,
});

sr.reveal('.entrainement-choix', {
    origin: 'left',
    distance: '30px',
    duration: 4000,
});

sr.reveal('.titre-equipements', {
    origin: 'bottom',
    distance: '30px',
    duration: 4000,
});

sr.reveal('#equipement', {
    origin: 'left',
    distance: '30px',
    duration: 4000,
});

sr.reveal('.titre-tarifs', {
    origin: 'bottom',
    distance: '30px',
    duration: 4000,
});