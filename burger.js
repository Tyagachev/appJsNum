'use strict'

// Иконка бургера
let divBurg = document.querySelector('.burgermenu');
let clickZhmyak = document.querySelector('.zhmyak__img');
clickZhmyak.addEventListener('click',function(){
        for(let i = 0; i <= 100; i++){
                setTimeout(function () {
        divBurg.style.height = i + 'px';
        }, i * 4);
                setTimeout(function (){
        divBurg.classList.toggle('burgermenu__menu-off');
        },20);
}
        clickZhmyak.style.display = 'none';
        clickZhmyakAlt.style.display = 'block';
        
});

// Иконка крестика
let clickZhmyakAlt = document.querySelector('.zhmyak__alt');
clickZhmyakAlt.addEventListener('click', function(){
        divBurg.classList.toggle('burgermenu__menu-off');
        clickZhmyakAlt.classList.toggle('zhmyak__alt-off');
        clickZhmyak.style.display = 'block';
        clickZhmyakAlt.style.display = 'none';
});
