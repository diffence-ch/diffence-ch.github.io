document.addEventListener("DOMContentLoaded", function() {
    // Check for cookies acceptance
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }

    // Floating button and menu functionality
    const floatingButton = document.getElementById('floatingButton');
    const menu = document.getElementById('menu');

    floatingButton.addEventListener('click', () => {
        // Toggle the menu visibility
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!floatingButton.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
        }
    });

    // Other functions
    function acceptCookies() {
        localStorage.setItem('cookiesAccepted', 'true');
        document.getElementById('cookie-banner').style.display = 'none';
    }

    function changeColors() {
        const asciiContainer = document.getElementById('ascii-container');

        // Randomly change colors of ASCII art
        asciiContainer.style.color = getRandomColor();
        asciiContainer.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Make sure to attach event listeners or perform any setup needed for these functions
    // For example, you might need to call acceptCookies() on some user action or setup changeColors() as needed
});
