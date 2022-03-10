'use strict'

// Иконка бургера
let divBurg = document.querySelector('.burgermenu');
let clickZhmyak = document.querySelector('.zhmyak__img');
clickZhmyak.addEventListener('click',() => {
        for(let i = 0; i <= 100; i++){
                setTimeout(() => {
        divBurg.style.height = i + 'px';
        }, i * 4);
        divBurg.style.height == 0 + 'px';
                setTimeout(() => {
        divBurg.classList.toggle('burgermenu__menu-off');
        },50);
}
        clickZhmyak.style.display = 'none';
        clickZhmyakAlt.style.display = 'block';
});

let clickZhmyakAlt = document.querySelector('.zhmyak__alt');
clickZhmyakAlt.addEventListener('click',() => {
        for(let i = 100; i >= 0; i--){
                setTimeout(() => {
        divBurg.style.height =  100 - i  + 'px';
        }, i * 4);
        //divBurg.style.height == 0 - 'px';
                setTimeout(() => {
        divBurg.classList.toggle('burgermenu__menu-off');
        },400);
}
        clickZhmyak.style.display = 'block';
        clickZhmyakAlt.style.display = 'none';
});

