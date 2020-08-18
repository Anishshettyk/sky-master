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

//restoring the data from html
const cityName = document.getElementById('input-value');
const btnSearch = document.getElementById('btn-search');
const description = document.getElementById('ess-head');
const temperatureValue = document.getElementById('ess-temp')
const locationName = document.getElementById('ess-loc');
const max = document.getElementById('max');
const min = document.getElementById('min');
const humidityValue = document.getElementById('humidity');
const windSpeedValue = document.getElementById('wind-speed');
const pressurevalue = document.getElementById('pressure');
const changeImg = document.getElementById('ess-img');





async function weatherDisplay() {
    let name = cityName.value;
    const apiKey = '6ff05d084236cc03549af40cb63a7b59';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const des = data.weather[0].description;
        const kelvinTemp = data.main.temp;
        const location = data.name;
        const KelvinTempMax = data.main.temp_max;
        const KelvinTempMin = data.main.temp_min;
        const pressure = data.main.pressure;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;


        const temperature = Math.floor(parseInt(kelvinTemp) - 273.15);
        const temperatureMax = Math.ceil(parseInt(KelvinTempMax) - 273.15);
        const temperatureMin = Math.floor(parseInt(KelvinTempMin) - 273.15);


        description.innerText = des;
        locationName.innerText = location;
        temperatureValue.innerHTML = `${temperature} <span>&#176;</span> C`;
        max.innerHTML = `${temperatureMax} <span>&#176;</span> C`;
        min.innerHTML = `${temperatureMin} <span>&#176;</span> C`;
        humidityValue.innerText = `${humidity} %`;
        windSpeedValue.innerText = `${windSpeed} kph`;
        pressurevalue.innerText = `${pressure} pa`;

        //photo change with respect to weather
        if (des === "overcast clouds") {
            changeImg.setAttribute('src', '/images/icons/overcast.png')
        } else if (des === 'clear sky') {
            changeImg.setAttribute('src', '/images/icons/clear sky.png')
        } else if (des == 'haze') {
            changeImg.setAttribute('src', '/images/icons/haze.png');
        } else if (des == 'scattered clouds') {
            changeImg.setAttribute('src', '/images/icons/scattered.png');
        } else if (des == 'light rain') {
            changeImg.setAttribute('src', '/images/icons/light.png');
        }

    } catch (error) {
        console.log(error);
        alert('ENTER A VALID CITY NAME');
    }
}



btnSearch.addEventListener('click', weatherDisplay);
document.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        weatherDisplay();
    }
});

//add todays date
const todayDate = document.getElementById('ess-date');
const date = new Date();
const formatDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
todayDate.textContent = date.toLocaleDateString('en-US', formatDate);