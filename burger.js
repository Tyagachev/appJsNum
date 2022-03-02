'use strict'

// Иконка бургера
let divBurg = document.querySelector('.burgermenu');
let clickZhmyak = document.querySelector('.zhmyak');
clickZhmyak.addEventListener('click',function(){
        for(let i = 0; i <=100; i++){
            divBurg.style.height = i + 'px';
        divBurg.classList.toggle('burburger__menu-off');
        clickZhmyak.style.display = 'none';
        clickZhmyakAlt.style.display = 'block';
        }
});

// Иконка крестика
let clickZhmyakAlt = document.querySelector('.zhmyak__alt');
clickZhmyakAlt.addEventListener('click', function(){
        divBurg.classList.toggle('burburger__menu-off');
        clickZhmyakAlt.classList.toggle('zhmyak__alt-off');
        clickZhmyak.style.display = 'block';
        clickZhmyakAlt.style.display = 'none';
});
