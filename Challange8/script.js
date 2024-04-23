const boxes = document.querySelectorAll('form div');

boxes.forEach(box => {
    const input = box.querySelector('input');
    const label = box.querySelector('label');
    const letters = label.textContent
    label.textContent = '';
    letters = letters.split('').map(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        label.appendChild(span);
        return span;
    });

    // targeting every letter with the animation
    input.addEventListener('focus', () => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('shift');
            }, index * 50); // Adjust the delay as needed
        });
    });

    input.addEventListener('blur', () => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.remove('shift');
            }, index * 50); // Adjust the delay as needed
        });
    });
});
