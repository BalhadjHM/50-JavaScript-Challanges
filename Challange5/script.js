const container = document.querySelector('.container');
const text = document.querySelector('.text');

window.addEventListener('load', (e) => {
    // blue the background
    container.classList.remove('blur');

    // countdown animation
    let percentage = 0;
    let countdown = setInterval(() =>{
        if(percentage <= 100){
            text.innerHTML = percentage + "%";
        }else{
            clearInterval(countdown);
        }
        percentage++;
    }, 30);
    setTimeout(() => {
        text.classList.add('countdownBlur');
    }, 1500);
})