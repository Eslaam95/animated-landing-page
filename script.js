let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mountains7 = document.getElementById("mountains7");
let nouvil = document.querySelector('.nouvil');
let mainSec = document.querySelector(".main");

window.onscroll = function(){
    let value = window.scrollY;
    stars.style.left = value + 'px' ;
    moon.style.top= value*4 + 'px';
    mountains3.style.top= value*2 + 'px';
    mountains4.style.top= value*1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value +'px';
    boat.style.left = value*1.5 + 'px';
    nouvil.style.fontSize= value + 'px';

    if (window.scrollY >= 60){
        nouvil.style.fontSize = 60 +'px';
        nouvil.style.position= 'fixed';
        if(window.scrollY > 388){
            nouvil.style.display='none';
        }else{
            nouvil.style.display='block';
        }
        if(window.scrollY > 130){
          mainSec.style.backgroundImage = 'linear-gradient(rgb(93 9 167), rgb(59 6 55))';
        }else{
            mainSec.style.backgroundImage = ' linear-gradient(#200016,#10001f)';
        }
    }

    if(window.scrollY > window.outerHeight){
        document.querySelector('header').classList.add('bg');
    }else{
        document.querySelector('header').classList.remove('bg');
    }
}
