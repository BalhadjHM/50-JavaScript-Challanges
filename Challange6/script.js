const boxs = document.querySelectorAll('.box');

window.addEventListener('scroll', function() {
    // get the height of the viewport height in px to trigger the animation
    const trigger = window.innerHeight / 5 *4;

    //
    boxs.forEach(box => {
        // get the box top height
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < trigger){
            // set the boxs that are in the viewport to be shown
            box.classList.add('show');
        }else{
            // give the animation to the boxs that are below the top height
            box.classList.remove('show');
        }
    });

});