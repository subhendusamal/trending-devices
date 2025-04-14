// let index = 0;
// const slidesToShow = 3;
// const slideWidthPercentage = 100 / slidesToShow;
// const totalSlides = document.querySelectorAll('.slide').length;
// const maxIndex = Math.floor((totalSlides - slidesToShow) / slidesToShow); 
// const carousel = document.getElementById('carousel-box-phone');

// function updateCarousel() {
//     carousel.style.transform = `translateX(-${index * slideWidthPercentage * slidesToShow}%)`;
// }

// function nextSlide() {
//     if (index < maxIndex) {
//         index += 1;  // Move forward by one set of 3 images
//         updateCarousel();
//     }
// }

// function prevSlide() {
//     if (index > 0) {
//         index -= 1;  // Move backward by one set of 3 images
//         updateCarousel();
//     }
// }















let index = 0;
const slidesToShow = 3;
const slideWidthPercentage = 100 / slidesToShow;
const totalSlides = document.querySelectorAll('.slide').length;
const maxIndex = Math.floor((totalSlides - slidesToShow) / slidesToShow); 
const carousel = document.getElementById('carousel-box-phone');

const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * slideWidthPercentage * slidesToShow}%)`;

    // Update button colors based on current index
    if (index <= 0) {
        prevButton.style.color = 'gray';
    } else {
        prevButton.style.color = 'white';
    }

    if (index >= maxIndex) {
        nextButton.style.color = 'gray';
    } else {
        nextButton.style.color = 'white';
    }
}

function nextSlide() {
    if (index < maxIndex) {
        index += 1;
        updateCarousel();
    }
}

function prevSlide() {
    if (index > 0) {
        index -= 1;
        updateCarousel();
    }
}

// Call it initially to set correct button colors on page load
updateCarousel();
































// for laptop
// let indexLaptop = 0;
// const slidesToShowLaptop = 2; // Show 2 slides at a time
// const slideWidthPercentageLaptop = 100 / slidesToShowLaptop;
// const totalSlidesLaptop = document.querySelectorAll('.slide-lap').length;
// const maxIndexLaptop = Math.floor((totalSlidesLaptop - slidesToShowLaptop) / slidesToShowLaptop); 
// const carouselLaptop = document.getElementById('carousel-box-laptop');

// function updateCarouselLaptop() {
//     carouselLaptop.style.transform = `translateX(-${indexLaptop * slideWidthPercentageLaptop * slidesToShowLaptop}%)`;
// }

// function nextSlideLaptop() {
//     if (indexLaptop < maxIndexLaptop) {
//         indexLaptop += 1;  // Move forward by one set of 2 images
//         updateCarouselLaptop();
//     }
// }

// function prevSlideLaptop() {
//     if (indexLaptop > 0) {
//         indexLaptop -= 1;  // Move backward by one set of 2 images
//         updateCarouselLaptop();
//     }
// }
let indexLaptop = 0;
const slidesToShowLaptop = 2;
const slideWidthPercentageLaptop = 100 / slidesToShowLaptop;
const totalSlidesLaptop = document.querySelectorAll('.slide-lap').length;
const maxIndexLaptop = Math.floor((totalSlidesLaptop - slidesToShowLaptop) / slidesToShowLaptop); 
const carouselLaptop = document.getElementById('carousel-box-laptop');

const prevButtonLaptop = document.getElementById('prev-button-laptop');
const nextButtonLaptop = document.getElementById('next-button-laptop');

function updateCarouselLaptop() {
    carouselLaptop.style.transform = `translateX(-${indexLaptop * slideWidthPercentageLaptop * slidesToShowLaptop}%)`;

    // Update button colors based on current index
    if (indexLaptop <= 0) {
        prevButtonLaptop.style.color = 'gray';
    } else {
        prevButtonLaptop.style.color = 'white';
    }

    if (indexLaptop >= maxIndexLaptop) {
        nextButtonLaptop.style.color = 'gray';
    } else {
        nextButtonLaptop.style.color = 'white';
    }
}

function nextSlideLaptop() {
    if (indexLaptop < maxIndexLaptop) {
        indexLaptop += 1;
        updateCarouselLaptop();
    }
}

function prevSlideLaptop() {
    if (indexLaptop > 0) {
        indexLaptop -= 1;
        updateCarouselLaptop();
    }
}

// Initial check for button states on load
updateCarouselLaptop();
