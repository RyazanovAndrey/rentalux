const links = document.querySelectorAll('.menu__link');
const drop = document.querySelector('.drop');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');


links.forEach(item => {
    item.addEventListener('click', (event) => {

        menu.classList.remove('active');
        burger.classList.remove('active');
        stopScroll.classList.remove('stop-scroll');

        let links = event.target;
        let drop = links.closest('.menu__item').querySelector('.drop');
        if (drop) {
            drop.classList.toggle('open');
            links.classList.toggle('arrow-rotate');

        }
    })
});


document.addEventListener('click', (event) => {
    if (!event.target.closest('.menu')) {
        drop.classList.remove('open');
        links.forEach(item => item.classList.remove('arrow-rotate'));
    }
});

// dark-toggle

const btnTheme = document.querySelector('.header__btn-theme');
const theme = document.querySelector('.theme');
const themeIcon = document.querySelector('.theme-icon');
const headerTel = document.querySelector('.header__tel');
const footerTel = document.querySelector('.footer-tel-ico');

let toggleTheme = false;

if(localStorage.getItem('theme') == 'true'){
    theme.href = 'css/dark.css';
    themeIcon.src = 'img/sun-icon.svg';
    localStorage.setItem('theme', true);
    headerTel.src = 'img/phone-icon-dark.svg';
    footerTel.src = 'img/phone-icon-dark.svg'
    
}

btnTheme.addEventListener('click', () => {

    if (toggleTheme == false) {
        theme.href = 'css/dark.css';
        themeIcon.src = 'img/sun-icon.svg';
        localStorage.setItem('theme', true);
        toggleTheme = !toggleTheme;
        headerTel.src = 'img/phone-icon-dark.svg';
        footerTel.src = 'img/phone-icon-dark.svg'

    }else{
        theme.href = 'css/main.css';
        themeIcon.src = 'img/moon-icon.svg';
        localStorage.setItem('theme', false);
        toggleTheme = !toggleTheme;
        headerTel.src = 'img/phone-icon.svg'
        footerTel.src = 'img/phone-icon.svg'
    }
})


// phone-mask

mask('[data-tel]');
const dataTel = document.querySelector('[data-tel]');

dataTel.addEventListener('blur', () => {
    if (dataTel.value == '+') {
        dataTel.value = ''
    }
})

// mobile-menu

const stopScroll = document.body

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    stopScroll.classList.toggle('stop-scroll');
})