document.addEventListener('DOMContentLoaded', function() {
    let ListPro = document.querySelector('ul.ListPro');
    let pro = document.querySelectorAll('li.itemPro');
    let dots = document.querySelectorAll('.slider .dots li');
    let pre = document.getElementById('pre');
    let next = document.getElementById('next');

    let active = 0;
    let lengpro = pro.length - 1;

    // Function to reload the slider
    function reloadSlider() {
        console.log(ListPro.style);
        let checkleft = pro[active].offsetLeft;
        console.log(checkleft);
        ListPro.style.transform = `translate(${-checkleft - 1000}px)`; // Corrected typo
        //ListPro.style.transition = 'transform 0.5s ease-in-out';
        
        // Update the slider here
    }

    // Function to update the dots indicating the active slide
    function updateDots() {
        dots.forEach((dot, index) => dot.classList.toggle('active', index === active));
    }

    // Function to move to the next slide
    function nextSlide() {
        active = (active + 1 > lengpro) ? 0 : active + 1;

        reloadSlider();
        updateDots();
    }

    // Function to move to the previous slide
    function prevSlide() {
        active = (active === 0) ? lengpro : active - 1;
        reloadSlider();
        updateDots();
    }

    // Event listener for the next button
    if (next) {
        next.addEventListener('click', nextSlide);
    } else {
        console.error('Không tìm thấy phần tử có ID "next".');
    }

    // Event listener for the previous button
    if (pre) {
        pre.addEventListener('click', prevSlide);
    } else {
        console.error('Không tìm thấy phần tử có ID "pre".');
    }

    // Autoplay functionality
    // let autoSlideInterval = setInterval(nextSlide, 1000);
});
function hiendn(){
    const a = document.getElementById("dn");
    a.style.display="flex";
    const b = document.getElementById("dk");
    b.style.display="none"
    console.log("da bam")
}
document.addEventListener('DOMContentLoaded', function() {
    const ListPro = document.querySelector('ul.ListPro').querySelectorAll('li.itemPro');
    let pro = document.querySelectorAll('li.itemPro');
    let dots = document.querySelectorAll('.slider .dots li');
    let pre = document.getElementById('pre');
    let next = document.getElementById('next');
  });
function hiendn1(){
    const b = document.getElementById("dk");
    b.style.display="none"
    const a = document.getElementById("dn");
    a.style.display="flex";
    console.log("da bam")
}
function hiendk(){
    const a = document.getElementById("dk");
    a.style.display="flex";
    const b = document.getElementById("dn");
    b.style.display="none";
    console.log("da bam")
}
function hiendk1(){
    const b = document.getElementById("dn");
    b.style.display="none";
    const a = document.getElementById("dk");
    a.style.display="flex";
    console.log("da bam")
}









function lui(){
    console.log("dang lui");
    if(active +1 > lengpro){
        active = 0;
    }else{
        active = active +1;
    }
    reloadSlider();
}
function toi(){

    console.log(pro)
    let active = 0;
    let lengpro = pro.length - 1;
    console.log(active)
    console.log("dang toi");
    if(active +1 > lengpro){
        active = 0;
    }else{
        active = active +1;
    }
    reloadSlider();
}
// });
// const next = document.getElementById('next');
// if (next) {
//     next.addEventListener('click', (e)=>{
//         console.log('hjhjhjh');
//         active = (active + 1 > lengpro) ? 0 : active + 1;
//         reloadSlider();
//         updateDots();
//     });
// } else {
//     console.error('Không tìm thấy phần tử có ID "next".');
// }
// function nextSlide() {
// }
function reloadSlider() {
    
    console.log(pro.length);
    // let checkleft = pro[active].offsetLeft;
    // ListPro.style.left = -checkleft + 'px';
    // ListPro.style.transition = 'transform 0.5s ease-in-out';
    //console.log(ListPro);
}

function prevSlide() {
    active = (active === 0) ? lengpro : active - 1;
    reloadSlider();
    updateDots();
}


function updateDots() {
    dots.forEach((dot, index) => dot.classList.toggle('active', index === active));
}
