// Grab the elements from the DOM
const track = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Set up tracking variables
let currentIndex = 0;

// Function to calculate how far to move
function updateSlider() {
    // Get the width of a single card + the gap (2rem = 32px roughly)
    const card = document.querySelector('.work-card');
    const cardWidth = card.offsetWidth;
    const gap = 32; 
    const moveAmount = cardWidth + gap;

    // Apply the movement using CSS transform
    track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
}

// Next Button Click
nextBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.work-card');
    // Calculate how many cards can be shown before hitting the end
    const maxIndex = cards.length - 1; 

    if (currentIndex < maxIndex) {
        currentIndex++;
        updateSlider();
    }
});

// Previous Button Click
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// Recalculate if the window resizes so it doesn't break
window.addEventListener('resize', updateSlider);