function createSlider(sliderId, navId) {
    const slider = document.getElementById(sliderId);
    const nav = document.getElementById(navId);
    const images = slider.getElementsByTagName('img');
    let currentIndex = 0;

    // Crea i pulsanti di navigazione
    for (let i = 0; i < images.length; i++) {
        const button = document.createElement('button');
        button.addEventListener('click', () => goToSlide(i));
        nav.appendChild(button);
    }

    function goToSlide(index) {
        currentIndex = index;
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateNav();
    }

    function updateNav() {
        Array.from(nav.children).forEach((button, index) => {
            button.classList.toggle('active', index === currentIndex);
        });
    }

    updateNav();
}

createSlider('slider1', 'nav1');
createSlider('slider2', 'nav2');