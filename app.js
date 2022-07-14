'use strict'
// global variables 



// for dark mode button
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

var x = 0;
var txt = 'A little bit about myself...';
var speed = 80;

function typeWriter() {
    if (x < txt.length) {
        document.getElementById("quote").innerHTML += txt.charAt(x);
        x++;
        setTimeout(typeWriter, speed);
    }
}

var y = 0;
var newtxt = 'Carleton Classifieds'; 
var speed2 = 150;
function typeWriter2() {
    if (y < txt.length) {
        document.getElementById("carleton-classifieds").innerHTML += newtxt.charAt(y);
        y++;
        setTimeout(typeWriter2, speed2);
    }
}

var z = 0;
var newtxt2 = 'Lets Connect!'; 
var speed3 = 150;
function typeWriter3() {
    if (z < newtxt2.length) {
        document.getElementById("connect").innerHTML += newtxt2.charAt(z);
        z++;
        setTimeout(typeWriter3, speed3);
    }
}



//for image slideshow in about
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";
    setTimeout(showSlides, 5000);
}



