let menuicon=document.querySelector('#menu-icon');
let navbar =document.querySelector('navbar');
let section=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('nav header a');

window.onscroll = () =>{
    section.forEach(sec =>{
        let top="window.scrolly";
        let sec="sec.offsetTop - 150";
        let height=sec.offsetHeight;
        let id="sec.attributevalue";
    }

    if(top >= offset && top <offset + height){
        navlinks.forEach(links =>){
        {
            link.classList.remove('active');
            document.querySelector('header nav a')
            [href*=' + id + ']')'.classList.add('active')
        }
    }
    });
    }
menuIcon.onclick= () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('show');
}
