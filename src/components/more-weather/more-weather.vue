<template>
    <div class="more">
        <div class="container">
            <div class="close">
                <span class="close-line"></span>
            </div>
            <ul>
                <li>Country: {{ currentWeather.sys.country }}</li>
                <li>Min Temperature: {{ currentWeather.main.temp_min }}</li>
                <li>Max Temperature: {{ currentWeather.main.temp_max }}</li>
                <li>Temperature: {{ currentWeather.main.temp }}</li>
                <li>weather: {{ currentWeather.weather[0].description }} <img :src='weatherImg'> </li>
                <li>Humidity: {{ currentWeather.main.humidity }}</li>
                <li>Wind Speed: {{ currentWeather.wind.speed }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'more',
    props: ['weather'],
    data() {
        return {
            currentWeather: {},
            weatherImg: ''
        }
    },
    mounted() {
        if (this.weather) {
            this.currentWeather = this.weather;
            this.weatherImg = `http://openweathermap.org/img/wn/${this.currentWeather.weather[0].icon}@2x.png`;
            console.log(this.currentWeather)
        }
    }
}
</script>

<style scoped>
    .more {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .container {
        position: relative;
        width: 50%;
        background-color: white;
        padding: 25px;
        border-radius: 15px;
    }

    ul {
        list-style: none;
        width: 100%;
    }

    li {
        color: black;
        text-align: left;
    }

    .close {
        position: absolute;
        top: 15px;
        right: 25px;
    }

    .close-line,
    .close-line::after {
        position: absolute;
        display: block;
        width: 3px;
        height: 25px;
        background: red;
    }

    .close-line {
        transform: rotate(45deg);
    }

    .close-line::after {
        content: '';
        transform: rotate(90deg);
    }
</style>