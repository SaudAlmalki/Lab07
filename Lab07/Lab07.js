document.addEventListener('DOMContentLoaded', function(){
    const header = document.getElementById ('header');
    const colorForm = document.getElementById('colorForm');
    const colorInput = document.getElementById('color');

    colorForm.addEventListener('submit', function(event){
        event.preventDefault();

        const color = colorInput.value;
        header.style.color = color;
    });
});    