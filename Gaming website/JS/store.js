document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.store .btn');
    
    const popup = document.getElementById('download-popup');
    const closePopupButton = document.getElementById('close-popup');

    // Show popup when any Download Now button is clicked
    downloadButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent link behavior
            popup.style.display = 'flex'; // Show popup
        });
    });

    
    closePopupButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});


// about section download button
// Selecting both download buttons
const downloadButtons = document.querySelectorAll('.game .btn, #about-download-btn');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.popup-buttons .btn:last-child');
const downloadNowButton = document.querySelector('.popup-buttons .btn:first-child');

// Show the popup when either download button is clicked
downloadButtons.forEach(button => {
    button.addEventListener('click', function () {
        popup.style.display = 'flex';
    });
});

// Close the popup when 'Not now' is clicked
closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
});

// Redirect to the login page when 'Download now' is clicked
downloadNowButton.addEventListener('click', function () {
    window.location.href = 'loginpage.html';
});
