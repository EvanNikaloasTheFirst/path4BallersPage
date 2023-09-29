
// Home page
document.addEventListener('DOMContentLoaded', function() {
    // Get the element to fade in
    const fadeElement = document.querySelector('.homeImage1');

    // Add a class to trigger the fade-in effect
    fadeElement.style.opacity = '1';
});
 

document.addEventListener('DOMContentLoaded', function() {
// Select the home-text element
const homeText = document.querySelector('.home-text');

// Function to slide the element in
function slideInHomeText() {
    homeText.style.right = '150px'; // Slide in by setting 'right' to 0
}
setTimeout(slideInHomeText,1500);

});

document.addEventListener('DOMContentLoaded', function () {
    const scrolEffect = document.querySelector('.together');

    // Define the function to slide the element in
    function slideTogetherImage() {
        scrolEffect.style.right = '0'; // Slide in by setting 'right' to 0
    }

    // Add a scroll event listener
    window.addEventListener('scroll', function () {
        // Check if the user has scrolled to a certain point (e.g., 500 pixels from the top)
        const scrollPosition = window.scrollY;
        if (scrollPosition >= 850) {
            slideTogetherImage();
        }
    });
});
// Get a reference to the element with the class "nav-box"
var navBoxElement = document.getElementsByClassName('.nav-box');


var navElement = document.querySelector('.checkbox');
navBoxElement.addEventListener('click', function() {
    // Your code to run when the element is clicked
    alert('Nav box clicked!');
    console.log('clicked')
    navElement.style.width = '';
    navElement.style.height = '';
    navElement.style.zIndex = '';
    navElement.style.backgroundColor = '';
    // You can replace this alert with any other JavaScript code you want to execute.
});
