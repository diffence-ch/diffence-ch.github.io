document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});

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