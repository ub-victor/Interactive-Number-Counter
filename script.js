document.addEventListener('DOMContentLoaded', function(){
    // Get DOM elememts
    const counterElement = document.getElementById('counter');
    const increaseBnt = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const resetBtn = document.getElementById('reset');

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});