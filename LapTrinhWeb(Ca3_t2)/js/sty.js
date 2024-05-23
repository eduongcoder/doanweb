// let ListPro = document.querySelector('.slider .ListPro');
// let pro = document.querySelectorAll(".itemPro");
// let dots = document.querySelectorAll('.slider .dots li');
// let pre = document.getElementById('pre');
// let next = document.getElementById('next');

// let active = 0;
// let lengpro = pro.length - 1;

// next.onclick = function() {
//     if(active +1 > lengpro){
//         active = 0;
//     }else{
//         active = active +1;
//     }
//     reloadSlider();
// }

// // });
// // const next = document.getElementById('next');
// // if (next) {
// //     next.addEventListener('click', (e)=>{
// //         console.log('hjhjhjh');
// //         active = (active + 1 > lengpro) ? 0 : active + 1;
// //         reloadSlider();
// //         updateDots();
// //     });
// // } else {
// //     console.error('Không tìm thấy phần tử có ID "next".');
// // }
// pre.addEventListener('click', prevSlide);

// // function nextSlide() {
// // }

// function prevSlide() {
//     active = (active === 0) ? lengpro : active - 1;
//     reloadSlider();
//     updateDots();
// }

// function reloadSlider() {
//     console.log(pro)
//     // let checkleft = pro[active].offsetLeft;
//     // ListPro.style.left = -checkleft + 'px';
//     // ListPro.style.transition = 'transform 0.5s ease-in-out';
// }

// // function updateDots() {
// //     dots.forEach((dot, index) => dot.classList.toggle('active', index === active));
// // }

// // let autoSlideInterval = setInterval(nextSlide, 1000);