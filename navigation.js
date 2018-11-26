
var mybutton = document.getElementById('myBtn');
var myMenu = document.getElementById("myDropdown");


mybutton.addEventListener('click', () => {
    mybutton.classList.toggle('change');
    myMenu.classList.toggle('show');
    })
