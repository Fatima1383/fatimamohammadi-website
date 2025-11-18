Let menuIcon = document.querySelector('#menu-icon');
Let navbar = document.querySelector('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
}

window.onscroll = ( ) => {
    
}

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
}







