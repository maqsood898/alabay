//Merchandise Section slider

let currentIndex = 1; // Start with the first actual slide
const slidesWrapper = document.getElementById('slidesWrapper');
const totalSlides = 4; // Original slides count (without clones)
const totalSlidesWithClones = document.getElementsByClassName('merchandise-slide').length;

// Set initial transform to show the first original slide
slidesWrapper.style.transform = `translateX(-100%)`;

// Function to move to the next or previous slide
function moveSlide(n) {
    currentIndex += n;

    // Smoothly transition to the next/previous slide
    slidesWrapper.style.transition = 'transform 0.6s ease';
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    // If we're at the cloned first/last slide, snap to the original
    if (currentIndex === 0) {
        // Moving from original first to cloned last
        setTimeout(() => {
            slidesWrapper.style.transition = 'none'; // Disable transition
            currentIndex = totalSlides; // Jump to the original last slide
            slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 600); // After the slide transition ends
    } else if (currentIndex === totalSlidesWithClones - 1) {
        // Moving from original last to cloned first
        setTimeout(() => {
            slidesWrapper.style.transition = 'none'; // Disable transition
            currentIndex = 1; // Jump to the original first slide
            slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 600); // After the slide transition ends
    }
}
// Function to set a specific slide using dots
function setSlide(n) {
    currentIndex = n + 1; // Add 1 because of the clone at the beginning
    slidesWrapper.style.transition = 'transform 0.6s ease';
    slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// Auto slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

//Game Section Slider
let gamecurrentIndex = 1; // Start with the first actual slide
const gameslidesWrapper = document.getElementById('gameslider');
const gametotalSlides = 2; // Original slides count (without clones)
const gametotalSlidesWithClones = document.getElementsByClassName('game-image').length;

// Set initial transform to show the first original slide
gameslidesWrapper.style.transform = `translateX(-100%)`;

// Function to move to the next or previous slide
function movegameSlide(m) {
    gamecurrentIndex += m;

    // Smoothly transition to the next/previous slide
    gameslidesWrapper.style.transition = 'transform 0.6s ease';
    gameslidesWrapper.style.transform = `translateX(-${gamecurrentIndex * 100}%)`;

    // If we're at the cloned first/last slide, snap to the original
    if (gamecurrentIndex === 0) {
        // Moving from original first to cloned last
        setTimeout(() => {
            gameslidesWrapper.style.transition = 'none'; // Disable transition
            gamecurrentIndex = gametotalSlides; // Jump to the original last slide
            gameslidesWrapper.style.transform = `translateX(-${gamecurrentIndex * 100}%)`;
        }, 600); // After the slide transition ends
    } else if (gamecurrentIndex === gametotalSlidesWithClones - 1) {
        // Moving from original last to cloned first
        setTimeout(() => {
            gameslidesWrapper.style.transition = 'none'; // Disable transition
            gamecurrentIndex = 1; // Jump to the original first slide
            gameslidesWrapper.style.transform = `translateX(-${gamecurrentIndex * 100}%)`;
        }, 600); // After the slide transition ends
    }
}

// Function to set a specific slide using dots
function setgameSlide(m) {
    gamecurrentIndex = m + 1; // Add 1 because of the clone at the beginning
    gameslidesWrapper.style.transition = 'transform 0.6s ease';
    gameslidesWrapper.style.transform = `translateX(-${gamecurrentIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(() => {
    movegameSlide(1);
}, 3000);
