const APIkey = 'abc'

const input = document.getElementById('search')
const inputButton = document.getElementById('search-button')
const weather = document.getElementById('weather')
const place = document.getElementById('location')
const description = document.getElementById('description')
const temp = document.getElementById('temperature')
const tempMax = document.getElementById('min-temp')
const tempMin = document.getElementById('max-temp')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('wind-speed')

let cityName = ''

input.addEventListener('input', (e) => {
    cityName = e.target.value
})

inputButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`)
    const data = await response.json()
    place.textContent = `Location: ${data.name}, ${data.sys.country}`
    description.textContent = `Description: ${data.weather[0].description}`
    temp.textContent = `Temperature: ${data.main.temp}°C`
    tempMax.textContent = `Max Temperature: ${data.main.temp_max}°C`
    tempMin.textContent = `Min Temperature: ${data.main.temp_min}°C`
    humidity.textContent = `Humidity: ${data.main.humidity}`
    windSpeed.textContent = `Speed: ${data.wind.speed} km/h`
})