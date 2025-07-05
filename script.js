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
    }

    // Change color based on value

    if(counter > 0){
        counterElement.style.color = "var(--positive-color)";
    }else if (counter < 0){
        counterElement.style.color = "var(--negative-color)";
    }else{
        counterElement.style.color = "var(--zero-color)"
    }
});