var box1 = document.getElementById('menu-overlay');
console.log('hey');

var isShowing = false;
// var arrayProject = [{
    
// }]

let bG2 = document.getElementById('bg-2');
let bG3 = document.getElementById('bg-3');

window.addEventListener('scroll',function(){
    console.log('hey')
    let offset = window.pageYOffset;
    console.log('offset:',offset)
    bG2.style.backgroundPositionY = -(offset * 0.2) +'px';
    bG3.style.backgroundPositionY = -(offset * 0.1) +'px';
})



// function activateMenu(num){

//         var holderImg = document.querySelectorAll('div.menu-overlay');
//             console.log('div.menu-overlay');
//             for(i=0;i<holderImg.length;i++){
//                 i = num
//                 if (isShowing == false){
//                 holderImg[i].classList.remove('animate__animated', 'animate__fadeOut');
//                 holderImg[i].classList.add('animate__animated', 'animate__fadeIn');
//                 holderImg[i].style.display = 'fblock';
//                 holderImg[i].style.display = 'flex';
//                 holderImg[i].style.flexDirection = 'column';
//                 holderImg[i].style.alignItems = 'center';
//                 holderImg[i].style.justifyContent = 'center';

//                 document.querySelector('body').style.overflow = 'hidden';
//                 document.querySelector('html').style.overflow = 'hidden';
//                 isShowing = true;
//                 return;
//             } else if (isShowing==true){
//                 holderImg[i].classList.remove('animate__animated', 'animate__fadeIn');
//                 holderImg[i].classList.add('animate__animated', 'animate__fadeOut');
//                 var timer = setTimeout(function(){holderImg[i].style.display = 'none'},1000);
//                 function stopTimer(){clearInterval(timer)};              
//                 document.querySelector('body').style.overflow = 'scroll';
//                 document.querySelector('html').style.overflow = 'scroll';
//                 //if want an animation in the flow, just put setTimeout then only display = 'none'
//                 isShowing = false;
                
//                 return;
//             } 
//         }
    

    
// }