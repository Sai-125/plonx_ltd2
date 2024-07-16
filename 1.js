const header = document.querySelector(".navbar");

const head_sub = document.querySelector('.nav_main')

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

window.addEventListener ("scroll", function() {
    head_sub.classList.toggle ("release", window.scrollY > 0);
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav_links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};



// num count

let valuedisplays = document.querySelectorAll('.num')
let interval = 500

valuedisplays.forEach(vd=>{
    let start = 0
    let endvalue = parseInt(vd.getAttribute('data-val'))
    let duration = Math.floor(interval / endvalue);
    let counter = setInterval(()=>{
        start +=1 
        vd.textContent = start
        if(start == endvalue){
            clearInterval(counter)
        }
    },duration)

})




AOS.init({
    // disable:true,
    delay:100,
    duration:1000,
});
