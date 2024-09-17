document.addEventListener("DOMContentLoaded", function() {
    // Check for cookies acceptance and show/hide the cookie banner
    const cookieBanner = document.getElementById('cookie-banner');
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    } else {
        cookieBanner.style.display = 'none';
    }

    // Floating button and menu functionality
    const floatingButton = document.getElementById('floatingButton');
    const menu = document.getElementById('menu');

    // Toggle the menu visibility when the floating button is clicked
    if (floatingButton) {
        floatingButton.addEventListener('click', () => {
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        });
    }

    // Hide the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (floatingButton && !floatingButton.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });

    // Function to accept cookies
    function acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
    }

    // Function to change colors of ASCII art
    function changeColors() {
        const asciiContainer = document.getElementById('ascii-container');
        if (asciiContainer) {
            asciiContainer.style.color = getRandomColor();
            asciiContainer.style.backgroundColor = getRandomColor();
        }
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Attach the acceptCookies function to the button in the cookie banner
    const acceptButton = document.querySelector('#cookie-banner button');
    if (acceptButton) {
        acceptButton.addEventListener('click', acceptCookies);
    }

    // Optionally, if there's a button to change colors, attach the event listener here
    const changeColorsButton = document.getElementById('ascii-button');
    if (changeColorsButton) {
        changeColorsButton.addEventListener('click', changeColors);
    }
});
