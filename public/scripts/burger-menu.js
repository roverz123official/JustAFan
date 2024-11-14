const burgerButton = document.querySelector('.burger-button');
burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('open');
    document.querySelector('.burger-button-rocks').classList.toggle('open');
})