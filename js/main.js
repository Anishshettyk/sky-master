const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('header');
const heroImg = document.getElementById('hero-img');





//dark mode
function darkMode() {
    nav.style.background = 'rgb(0 0 0 / 100%)';
    toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon');
    heroImg.src = './images/hero/hero-dark.svg';
}

//light mode
function lightMode() {
    nav.style.background = 'rgb(255 255 255 / 100%)';
    toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
    heroImg.src = './images/hero/hero-light.svg';

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

!(function ($) {
    "use strict";
    //Init AOS

    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    $(window).on('load', function () {
        aos_init();
    });
})(jQuery);

//weather report
const weatherStat = document.getElementById('weather-stat');
const placeInfoImg = document.getElementById('place-info-img');

async function weatherReport() {
    const apiurl = `http://api.weatherstack.com/current?access_key=e56d03fe39377be8dc40e4590cee8f99&query=puttur`;
    const repsonse = await fetch(apiurl);
    const data = await repsonse.json();
    console.log(data);

    weatherStat.innerText = data.current.weather_descriptions[0];
    placeInfoImg.src = data.current.weather_icons[0];
}
weatherReport();