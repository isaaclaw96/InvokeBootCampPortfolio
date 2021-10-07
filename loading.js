const loader = document.querySelector('.loader');
const wrapper = document.querySelector('.wrapper');

function init(){
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        wrapper.style.display = 'block';
        setTimeout(() => (wrapper.style.opacity = 1), 50);
        
    }, 2000);
}

init();

let container = document.getElementById('container');

window.addEventListener('scroll',function(){
    let offset = window.pageYOffset;
    // console.log('offset:',offset)
    container.style.backgroundPositionY = -(offset * 0.3) +'px';
})

// let titleChange = document.getElementById('change');
// let myArr = ['LOTR Fanatic(Obviously...)', 'Food Fanatic', 'Seafarer to Web Surfer']
// var hover = titleChange.addEventListener('mouseover', mouseHover);

// function changeCaption(){
//     for(i=0;i<myArr.length;i++){
//         console.log(myArr[i]);
//     }
// }


// function mouseHover(){
//     // var timer = setInterval(changeCaption, 2000);
//     changeCaption();

//     // clearInterval(timer);
// }
