// Function to open the popup
function openPopup() {
    document.getElementById("login-popup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
    document.getElementById("login-popup").style.display = "none";
}

// Event listener for Play Now button
document.addEventListener('DOMContentLoaded', function() {
    const playNowButton = document.querySelector('.home .btn');
    if (playNowButton) {
        playNowButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents default link behavior
            openPopup(); // Show popup instead
        });
    }
});
