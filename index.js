const loading = document.querySelector('.text-loading');
const background = document.querySelector('.col');

let percent = 0;

let int = setInterval(blurring,50);

function blurring (){
    percent++;
    loading.innerText = `${percent}%`;
    loading.style.opacity = scale(percent, 0,100,1,0);
    background.style.filter = `blur(${scale(percent,0,100,30,0)}px)`

   if (percent > 99) {
       clearInterval(int);
   }
   console.log(percent)
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers




