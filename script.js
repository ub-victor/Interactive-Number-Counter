document.addEventListener('DOMContentLoaded', function(){
    // Get DOM elememts
    const counterElement = document.getElementById('counter');
    const increaseBnt = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const resetBtn = document.getElementById('reset');

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Initalize counter
    let counter = 0;

    // Update counter display
    function UpdateCounter(){
        counterElement.textContent = counter
    

    // Change color based on value

        if(counter > 0){
            counterElement.style.color = "var(--positive-color)";
        }else if (counter < 0){
            counterElement.style.color = "var(--negative-color)";
        }else{
            counterElement.style.color = "var(--zero-color)"
        }

        // Add animation

        counterElement.classList.add("pulse");
        setTimeout(()=>{
            counterElement.classList.remove("pulse");
        }, 300);

    }

    // Event handlers

    function handleIncrease(){
        counter++;
        UpdateCounter();
    }

    function handleDecrease(){
        // Prevent going below 0 
        if(counter > 0){  
            counter--;
            UpdateCounter()
        }
    }

    function handleReset(){
        counter = 0;
        UpdateCounter();

        // Add special animation for reset
        counterElement.classList.add("reset-animation");
        setTimeout(()=>{
            counterElement.classList.remove("reset-animation");
        }, 500);
    }

    // Event listeners
    increaseBnt.addEventListener('click', handleIncrease);
    decreaseBtn.addEventListener('click', handleDecrease);
    resetBtn.addEventListener('click', handleReset);

    // Keyboard support
    






});