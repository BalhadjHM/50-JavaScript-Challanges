const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const steps = document.querySelectorAll('.box');
let checkedStepIndex = Array.from(steps).findIndex(step => step.classList.contains('check'));

// Function to enable/disable buttons based on current step
function handleButtonState() {
    if (checkedStepIndex === 0) {
        // Disable previous if at first step
        prev.classList.remove('avilabale');
    } else if (checkedStepIndex === (steps.length - 1)) {
        // Disable next if at last step
        next.classList.remove('avilabale');
    }else {
        prev.classList.add('avilabale');
        next.classList.add('avilabale');
    }
    console.log(checkedStepIndex);
}

handleButtonState();

// if the user click next, add to the last checked element class "check"
next.addEventListener('click', () => {
    if(checkedStepIndex < (steps.length -1)){
        steps[checkedStepIndex].classList.add('filled')
        checkedStepIndex++;
        steps[checkedStepIndex].classList.add('check');
        handleButtonState();
    }
})

// if the user click previous remove from the last checked element the "check" class
prev.addEventListener('click', () =>{
    if(checkedStepIndex > 0){
        steps[checkedStepIndex].classList.remove('check');
        checkedStepIndex--;
        steps[checkedStepIndex].classList.remove('filled');
        handleButtonState();
    }
})
