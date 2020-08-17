const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('header');





//dark mode
function darkMode() {
    nav.style.background = 'rgb(0 0 0 / 100%)';
    toggleIcon.children[0].textContent = 'Dark mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
}

//light mode
function lightMode() {
    nav.style.background = 'rgb(255 255 255 / 100%)';
    toggleIcon.children[0].textContent = 'Light mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

}
//switch theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', "dark");
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}


//event listener
toggleSwitch.addEventListener('change', switchTheme);

//check local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
    if (currentTheme === 'light') {
        toggleSwitch.checked = false;
        lightMode();
    }
}