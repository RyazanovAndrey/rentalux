const links = document.querySelectorAll('.menu__link');
const drop = document.querySelector('.drop');


links.forEach(item =>{
    item.addEventListener('click', (event)=> {

        let links = event.target;
        let drop = links.closest('.menu__item').querySelector('.drop');
        if(drop){
            drop.classList.toggle('open');
            links.classList.toggle('arrow-rotate');
        }
    })
});


document.addEventListener('click', (event)=> {
    if(!event.target.closest('.menu')){
        drop.classList.remove('open');
        links.forEach(item => item.classList.remove('arrow-rotate'));
    }
});


// phone-mask

mask('[data-tel]');
const dataTel = document.querySelector('[data-tel]');

dataTel.addEventListener('blur', ()=> {
    if(dataTel.value == '+'){
        dataTel.value = ''
    }
})

// mobile-menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})