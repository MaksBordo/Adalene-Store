const slideshow = document.querySelector('.slideshow');
const slideshowItems = document.querySelectorAll('.slideshow__item');
const [prev, next] = document.querySelectorAll('.slideshow__control');
let transitionend = false;
prev.addEventListener('click', () => {
    if (transitionend) {
        transitionend = false;
        shiftLeft();
    }
});
next.addEventListener('click', () => {
    if (transitionend) {
        transitionend = false;
        shiftRight();
    }
});
slideshowItems.forEach((el) => {
    el.addEventListener('transitionend', () => { transitionend = true; })
 });

let intervalId;
let productAmountIteration = 0;

function shiftLeft() {
    for(const item of slideshowItems){
        item.style.opacity = "1";
    }    
    switch (productAmountIteration) {
        case 0:
            slideshowItems[productAmountIteration].style.opacity = "0";
            slideshowItems[productAmountIteration].style.transform = "translateX(500%)";
            for (let i = productAmountIteration + 1; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(-100%)";
            } break;
        case 1:
            slideshowItems[productAmountIteration].style.opacity = "0";
            for (let i = 0; i <= productAmountIteration; i++) {
                slideshowItems[i].style.transform = "translateX(400%)";
            }
            for (let i = productAmountIteration + 1; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(-200%)";
            } break;
        case 2:
            slideshowItems[productAmountIteration].style.opacity = "0";
            for (let i = 0; i <= productAmountIteration; i++) {
                slideshowItems[i].style.transform = "translateX(300%)";
            }
            for (let i = productAmountIteration + 1; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(-300%)";
            } break;
        case 3:
            slideshowItems[productAmountIteration].style.opacity = "0";
            for (let i = 0; i <= productAmountIteration; i++) {
                slideshowItems[i].style.transform = "translateX(200%)";
            }
            for (let i = productAmountIteration + 1; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(-400%)";
            } break;
        case 4:
            slideshowItems[productAmountIteration].style.opacity = "0";
            for (let i = 0; i <= productAmountIteration; i++) {
                slideshowItems[i].style.transform = "translateX(100%)";
            }
            slideshowItems[productAmountIteration + 1].style.transform = "translateX(-500%)";
            break;
        case 5:
            slideshowItems[productAmountIteration].style.opacity = "0";
            for (let i = 0; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(0)";
            } break;
    }
    productAmountIteration++;
    if (productAmountIteration === 6) { productAmountIteration = 0;}
}

function shiftRight() {
    for(const item of slideshowItems){
        item.style.opacity = "1";
    }
    switch (productAmountIteration) {
        case 0:
            slideshowItems[5].style.opacity = "0";
            slideshowItems[5].style.transform = "translateX(-500%)";
            for (let i = productAmountIteration; i < 5; i++) {
                slideshowItems[i].style.transform = "translateX(100%)";
            } break;
        case 5:
            slideshowItems[4].style.opacity = "0";
            for (let i = 4; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(-400%)";
            }
            for (let i = 0; i < 4; i++) {
                slideshowItems[i].style.transform = "translateX(200%)";
            } break;
        case 4:
            slideshowItems[3].style.opacity = "0";
            for (let i = 3; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(-300%)";
            }
            for (let i = 0; i < 3; i++) {
                slideshowItems[i].style.transform = "translateX(300%)";
            } break;
        case 3:
            slideshowItems[2].style.opacity = "0";
            for (let i = 2; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(-200%)";
            }
            for (let i = 0; i < 2; i++) {
                slideshowItems[i].style.transform = "translateX(400%)";
            } break;
        case 2:
            slideshowItems[1].style.opacity = "0";
            for (let i = 1; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(-100%)";
            }
            slideshowItems[0].style.transform = "translateX(500%)";
            break;
        case 1:
            slideshowItems[0].style.opacity = "0";
            for (let i = 0; i < slideshowItems.length; i++) {
                slideshowItems[i].style.transform = "translateX(0)";
            } break;
    }
    productAmountIteration--;
    if (productAmountIteration < 0) { productAmountIteration = 5;}
}

startSlideshow();
slideshow.addEventListener("mouseenter", endSlideshow);
slideshow.addEventListener("mouseleave", startSlideshow);
function startSlideshow() {
    intervalId = setInterval(shiftLeft, 3000);
}
function endSlideshow() {
    clearInterval(intervalId);
}