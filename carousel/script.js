let slidePosition = 0;
const slides = document.getElementsByClassName("carousel_item")
const totalSlides = slides.length
// console.log(totalSlides);

document.getElementById("next").addEventListener("click",()=> {
     nextPosition();
})

document.getElementById("prev").addEventListener("click",()=> {
    prevPosition();
})


function updateSlide(){
    for(let slide of slides){
        slide.classList.remove('visible')
        slide.classList.add('hidden')
    }
    slides[slidePosition].classList.add('visible')
}


function nextPosition(){
    if(slidePosition==totalSlides-1){ // cause for length it will total items but the array indexing is 0 based.
        slidePosition=0
    }else{
        slidePosition++
    }
    updateSlide();
}

function prevPosition(){
    if(slidePosition==0){ // cause for length it will total items but the array indexing is 0 based.
        slidePosition=totalSlides-1
    }else{
        slidePosition--
    }
    updateSlide();
}
