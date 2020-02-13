const sliderButton = document.querySelector('.slider-buttons'),
    previousArrow = document.querySelector('.slider-buttons .previous-arrow'),
    nextArrow = document.querySelector('.slider-buttons .next-arrow'),
    headerSlider = document.querySelector('.header-slider'),
    headers = document.querySelectorAll('.header');

let size = headers[0].clientWidth,
    counter = 1;


window.addEventListener('resize', () => {
    size = headers[0].clientWidth;
});

// function offset(el) {
//     let rect = el.getBoundingClientRect(),
//         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return {
//         top: rect.top + scrollTop,
//         left: rect.left + scrollLeft
//     }
// }

// const coordinates = offset(sliderButtons);

// console.log(coordinates);

// const sliderButtonsClone = document.querySelector('.slider-buttons__clone');
// sliderButtonsClone.style.display = 'none';
// sliderButtonsClone.style.left = `${coordinates.left}px`;
// sliderButtonsClone.style.top = `${coordinates.top}px`;

// const sliderButtonsAll = document.querySelectorAll('.slider-buttons');

// let sliderArr = [];

// sliderButtonsAll.forEach((s) => {
//     let si = offset(s);
//     sliderArr.push(si);
// });


nextArrow.addEventListener('click', () => {
    if (counter >= headers.length) return;
    // for (let i = 0; i < nextArrows.length; i++) {
    //     nextArrows[i].style.opacity = '0';
    // }
    // for (let i = 0; i < previousArrows.length; i++) {
    //     previousArrows[i].style.opacity = '0';
    // }
    // sliderButtonsClone.style.display = '';
    headerSlider.style.transition = `transform 1s ease-in-out`;
    headerSlider.style.transform = `translateX(${-size * counter}px)`;
    sliderButton.style.transform = `translateX(${size * counter}px)`;
    counter++;
    // setTimeout(() => {
    //     sliderButtonsClone.style.display = 'none';
    //     for (let i = 0; i < nextArrows.length; i++) {
    //         nextArrows[i].style.opacity = '';
    //     }
    //     for (let i = 0; i < previousArrows.length; i++) {
    //         previousArrows[i].style.opacity = '';
    //     }
    // }, 1000);
});



previousArrow.addEventListener('click', () => {
    if (counter == 1) return;
    // for (let i = 0; i < nextArrows.length; i++) {
    //     nextArrows[i].style.opacity = '0';
    // }
    // for (let i = 0; i < previousArrows.length; i++) {
    //     previousArrows[i].style.opacity = '0';
    // }
    // sliderButtonsClone.style.display = '';
    headerSlider.style.transition = `transform 1s ease-in-out`;
    headerSlider.style.transform = `translateX(${size * (-counter + 2)}px)`;
    sliderButton.style.transform = `translateX(${-size * (-counter + 2)}px)`;
    counter--;
    // setTimeout(() => {
    //     sliderButtonsClone.style.display = 'none';
    //     for (let i = 0; i < nextArrows.length; i++) {
    //         nextArrows[i].style.opacity = '';
    //     }
    //     for (let i = 0; i < previousArrows.length; i++) {
    //         previousArrows[i].style.opacity = '';
    //     }
    // }, 1000);
});