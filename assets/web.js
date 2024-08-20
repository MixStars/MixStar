function updateCarousel() {
    images.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
    updateind();
}

function updateind() {
    indContainer.innerHTML = '';
    for (let i = 0; i < totalImages; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator ' + (i === currentIndex ? 'active' : '');
        indicator.onclick = () => {
            currentIndex = i;
            updateCarousel();
        };
        indContainer.appendChild(indicator);
    }
}

