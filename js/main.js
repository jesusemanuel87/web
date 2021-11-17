// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

function menus(){
        let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 300){

        menu.style.top = '50px';
        abrir.style.color = '#fff';
    }else{
        menu.style.top = '50px';
        abrir.style.color = '#fff';
    }
}

function apertura(){
    if(cerrado){
        menu.style.width = '100%';
        menu.style.height = '40%';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

window.addEventListener('click',function(e){
    // console.log(e.target);
    if(cerrado==false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});

window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset);
    menus();
});

window.addEventListener('resize', function(){
    if(screen.width>= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});