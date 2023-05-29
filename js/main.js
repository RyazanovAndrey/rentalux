const links = document.querySelectorAll('.menu__link');
const drop = document.querySelector('.drop');


links.forEach(link =>{
    link.addEventListener('click', (event)=> {
        let links = event.target;
        let drop = links.closest('.menu__item').querySelector('.drop');
        if(drop){
            drop.classList.toggle('open')
        }
        links.classList.toggle('arrow-rotate')
    })
});


document.addEventListener('click', (event)=> {
    if(!event.target.closest('.menu')){
        drop.classList.remove('open');
        document.querySelector('.menu__link.arrow-rotate::after').remove()
    }
})