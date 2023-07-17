

/* For Dark Mode Toggle */

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

/*For Hamburger Menu of smaller Devices */

const toggleButton = document.getElementById('Togglemenu');
const navLinks = document.getElementById('Toggling');

toggleButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})