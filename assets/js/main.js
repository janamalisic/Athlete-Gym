const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toogle'); // Ispravite "nav-toggle" u "nav-toogle"
const navClose = document.getElementById('nav-close');

/*=============== Meni prikazi ===============*/
/* Potvrdi da li konstanta postoji */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Sakrij Meni*/
/* Potvrdi da li konstanta postoji */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // kada kliknemo na svaki nav__link, uklanjamo show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // kada je scroll veci od 50 viewport visine, dodaj scroll-header class u header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate__form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) =>{
    e.preventDefault()

    // Proveri da li polje ima vrednost
    if (calculateCm.value === '' || calculateKg.value === ''){
        // Dodaj i izbrisi boju
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        // Pokazi poruku
        calculateMessage.textContent = 'Unesite Visinu i Težinu.'

        // Ukloni poruku posle 3sek
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
    } else{
        // BMI formula
        const cm = calculateCm.value / 100, 
              kg = calculateKg.value, 
              bmi = Math.round(kg / (cm * cm))

        // Prikazi health status
        if(bmi < 18.5){
            //Dodaj boju i prikazi poruku
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Vaš BMI je ${bmi} i mršavi ste.`
        } else if(bmi < 25){
            //Dodaj boju i prikazi poruku
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Vaš BMI je ${bmi} i zdravi ste.`
        } else {
            //Dodaj boju i prikazi poruku
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Vaš BMI je ${bmi} i imate višak kilograma.`
        }

        // Izbrisati input polja
        calculateCm.value = ''
        calculateKg.value = ''

        // Ukloni poruku 4 sek
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000)
    }
}

/*=============== MESSAGE JS CONTACT FORM ===============*/
const contactForm = document.querySelector('.contactForm');
const kontaktMessage = document.getElementById('kontakt-message');
const submitButton = document.getElementById('submit-button');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Ovdje možete dodati logiku za slanje forme na email, ali za ovaj primjer, samo ćemo prikazati poruku
    kontaktMessage.textContent = 'Vaši podaci su uspešno prosleđeni';
    kontaktMessage.classList.add('color-green');

    // Sakrij dugme "Pošalji" nakon što se forma pošalje
    submitButton.style.display = 'none';

     // Izbriši sadržaj iz input polja
     const inputFields = contactForm.querySelectorAll('input, textarea');
     inputFields.forEach((field) => {
         field.value = '';
     });

    // Opciono: Ako želite da poruka nestane nakon nekog vremena
    setTimeout(() => {
        kontaktMessage.textContent = '';
        kontaktMessage.classList.remove('color-green');
    }, 5000); // Poruka će se sakriti nakon 5 sekundi
});





calculateForm.addEventListener('submit', calculateBmi);

