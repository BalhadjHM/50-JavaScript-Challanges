const iphone = document.querySelector('.iphone');
const samsung = document.querySelector('.samsung');

function grow (element1, element2){
    element1.addEventListener('mouseover', () => {
        element1.classList.add('grow');
        element2.classList.add('shrink');
    })
    element1.addEventListener('mouseout', () => {
        element1.classList.remove('grow');
        element2.classList.remove('shrink');
    })
}

grow(iphone, samsung);
grow(samsung, iphone);