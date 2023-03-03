const element = document.getElementsByClassName('slider-item')
const dots = document.getElementsByClassName('dot')


let currentElement = 0;


const next = () => {  
    if(currentElement + 1 < element.length){
        element[currentElement].classList.remove('active')
        dots[currentElement].classList.remove('active')
        currentElement++;
        element[currentElement].classList.add('active')
        dots[currentElement].classList.add('active')
    }

    
}

const prev = () => {
    if (currentElement > 0) {
        element[currentElement].classList.remove('active')
        dots[currentElement].classList.remove('active')
        currentElement--;
        element[currentElement].classList.add('active')
        dots[currentElement].classList.add('active')
    }
}
