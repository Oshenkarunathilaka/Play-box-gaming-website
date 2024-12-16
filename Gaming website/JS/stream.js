document.addEventListener("DOMContentLoaded", function () {
    const startStreamButton = document.querySelector(".start-stream .btn");
    const popup = document.getElementById("popup");
    const closePopupButton = document.getElementById("closePopup");

    // Show popup on button click
    startStreamButton.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    // Close popup on "Not Now" button click
    closePopupButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Redirect to login page when "Login Now" button is clicked (handled via HTML link)
});
