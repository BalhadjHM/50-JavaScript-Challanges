const container = document.querySelector('.container');
const input = document.querySelector('input');
const icon = document.querySelector('svg');

icon.addEventListener('click', (e) => {
    container.classList.toggle('active');
    input.focus();
})