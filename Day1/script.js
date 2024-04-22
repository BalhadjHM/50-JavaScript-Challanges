const container = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const title = card.querySelector('h3');
    if(card.classList.contains('grow')){
        title.classList.remove('hidden');
    }else{
        title.classList.add('hidden');
    }
});

cards.forEach(card => card.addEventListener('click', (e) => {
    cards.forEach(card => card.classList.remove('grow'));
    card.classList.add('grow');    
    cards.forEach(card => {
        const title = card.querySelector('h3');
        if(card.classList.contains('grow')){
            title.classList.remove('hidden');
        }else{
            title.classList.add('hidden');
        }
    });
}))
