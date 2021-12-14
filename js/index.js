/* menu */

let turnOnSun = () => {
    let result1 = document.getElementsByClassName('far')[0];
    result1.style.display = 'none';
    let result2 = document.getElementsByClassName('far')[1];
    result2.style.display = 'block';
    result2.style.transition = "1s";
    result2.style.color = 'white';

    let bg_menu = document.getElementById('main-header');
    bg_menu.style.backgroundColor = 'black';
    bg_menu.style.transition = '0.45s';
    let bg_menu2 = document.getElementById('main-body');
    bg_menu2.style.backgroundColor = 'black';
    bg_menu2.style.transition = '0.45s';
  

    let fontColor1 = document.querySelectorAll('.nav-menu>h1')[0];
    fontColor1.style.color = 'white';
    let fontColor3 = document.querySelectorAll('.lst')[1];
    fontColor3.style.color = "white";
    let fontColor4 = document.querySelectorAll('.lst')[2];
    fontColor4.style.color = "white";
    let fontColor5 = document.querySelectorAll('.lst')[3];
    fontColor5.style.color = "white";
    let fontColor6 = document.querySelectorAll('.lst')[4];
    fontColor6.style.color = "white";
    let fontColor7 = document.querySelectorAll('.lst')[5];
    fontColor7.style.color = "white";

    let about = document.getElementsByClassName('hny-title')[0];
    about.style.color = "white";
    let about2 = document.getElementsByClassName('view2')[0];
    about2.style.color = "white";


    let pro1 = document.querySelectorAll('.process-title');
    for (let i = 0; i < pro1.length; i++)
    {
        pro1[i].style.color = "white";
    }

    let read = document.querySelectorAll('.read-title');
    for (let i = 0; i < pro1.length; i++)
    {
        read[i].style.color = "white";
    }

    let read3 = document.getElementsByClassName('view2')[0];
    read3.style.color = "white";
    

}

let turnOnMoon = () => {
    let result1 = document.getElementsByClassName('far')[0];
    result1.style.display = 'block';
    result1.style.transition = "1s";
    result1.style.color = 'black';
    let result2 = document.getElementsByClassName('far')[1];
    result2.style.display = 'none';

    let bg_menu = document.getElementById('main-header');
    bg_menu.style.backgroundColor = 'white';
    let bg_menu2 = document.getElementById('main-body');
    bg_menu2.style.backgroundColor = 'white';
    

    let fontColor1 = document.querySelectorAll('.nav-menu>h1')[0];
    fontColor1.style.color = 'black';
    let fontColor3 = document.querySelectorAll('.lst')[1];
    fontColor3.style.color = "black";
    let fontColor4 = document.querySelectorAll('.lst')[2];
    fontColor4.style.color = "black";
    let fontColor5 = document.querySelectorAll('.lst')[3];
    fontColor5.style.color = "black";
    let fontColor6 = document.querySelectorAll('.lst')[4];
    fontColor6.style.color = "black";
    let fontColor7 = document.querySelectorAll('.lst')[5];
    fontColor7.style.color = "black";

    let about = document.getElementsByClassName('hny-title')[0];
    about.style.color = "black";
    let about2 = document.getElementsByClassName('view2')[0];
    about2.style.color = "black";

    let pro1 = document.querySelectorAll('.process-title');
    for (let i = 0; i < pro1.length; i++)
    {
        pro1[i].style.color = "black";
    }

    let read1 = document.querySelectorAll('.read-title');
    for (let i = 0; i < pro1.length; i++)
    {
        read1[i].style.color = "black";
    }

    let read2 = document.querySelectorAll('.view2');
    for (let i = 0; i < pro1.length; i++)
    {
        read2[i].style.color = "black";
    }

  
}

// Slideshow 
var index = 0;
hienThiSlide1();
hienThiSlide(index);


function hienThiSlide1() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    if (index > slides.length - 1) {index = 0} 
    slides[index].style.display = "block"; 
    index++;
    setTimeout(hienThiSlide1, 2000); // Change image every 2 seconds
}

