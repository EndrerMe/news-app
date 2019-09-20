<template>
    <div class="weather">
        <div class="widget" ref='widget' :style='blockPosition'>
            <span class="draggable">(draggable)</span>
            <div class="left-panel panel">
                <div class="city">
                    <input class="input-country" type="text" v-model="userCoutry" v-on:input="changecountry($event)">
                </div>
                <div class="info">
                    <div class="weather-info">
                        <span>{{ weather }}</span>
                        <img :src="currentWeatherImg">
                    </div>

                    <div class="temp">
                        <span>Temp {{ temp }}&deg;</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import weatherService from './../../shared/services/weather.service';
import _ from 'lodash'

export default {
    name: 'Weather',
    data() {
        return {
            temp: '',
            location: '',
            userCoutry: 'London',
            currentWeatherImg: '',
            weather: '',
            isMouseDown: false,
            block: null,
            blockPosition: {
                margin: 'auto auto'
            },
        }
    },
    created() {
        this.isMouseDown = false;
        weatherService.getWeatherByCountry(this.userCoutry).then((res) => {
            this.temp = res.data.main.temp;
            this.location = res.data.name;
            this.userCoutry = res.data.name;

            this.currentWeatherImg = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
            this.weather = res.data.weather[0].description
        });

    },
    methods: {
        changecountry:_.debounce(function(event) {
            let value = event.target.value;

            weatherService.getWeatherByCountry(value).then((res) => {
                this.temp = res.data.main.temp;
                this.location = res.data.name;
                this.userCoutry = res.data.name;
                
                this.currentWeatherImg = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
                this.weather = res.data.weather[0].description
            });
        }, 1500),

        // Widget moveable functions
        mouseDown(e) {
            // let x;
            // let y;
            // let blockX = this.$refs['widget'].getBoundingClientRect().left;
            // let blockY = this.$refs['widget'].getBoundingClientRect().top;

            // if (e.clientY && e.clientX) {
            //     x = e.clientX;
            //     y = e.clientY
            // } else if (e.touches[0].clientX && e.touches[0].clientY) {
            //     x = e.touches[0].clientX;
            //     y = e.touches[0].clientY
            // }

            // this.blockPosition = {
            //     left: x + (x - blockX) + 'px',
            //     top: y + (y - blockY) + 'px',
            // }

            // this.isMouseDown = true;
        },

        mouseUp() {
            //this.isMouseDown = false;
        },

        changePosition(e) {
            // if (this.isMouseDown) {
            //     let x;
            //     let y;
            //     let blockX = this.$refs['widget'].getBoundingClientRect().left;
            //     let blockY = this.$refs['widget'].getBoundingClientRect().top;
                
            //     if (e.clientY && e.clientX) {
            //         x = e.clientX;
            //         y = e.clientY;
            //     } else if (e.touches[0].clientX && e.touches[0].clientY) {
            //         x = e.touches[0].clientX;
            //         y = e.touches[0].clientY
            //     }

            //     this.blockPosition.left = x + (x - blockX) + 'px';
            //     this.blockPosition.top = y + (y - blockY) + 'px';
            // }
        }
    },
}
</script>

<style scoped>
    .weather {
        position: absolute;
        display: flex;
        /* align-items: center;
        justify-content: center; */
        width: 100%;
        height: 100%;
        top: 0;
        overflow: hidden;
    }

    div.widget {
        position: absolute;
        display: flex;
        position: relative;
        width: 550px;
        height: 200px;
        /* margin: auto auto; */
        background-color: #fcfdfd;
        border-radius: 9px;
        padding: 25px;
        padding-right: 30px;
        box-shadow: 0px 31px 35px -26px #080c21;
        z-index: 9;
    }

    div.left-panel {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .info {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    div.city {
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        padding-top: 5px;
        width: 20%;
        color: rgba(0,0,0,0.7);
    }

    div.temp,
    div.weather-info {
        font-size: 25px;
        color: rgba(0,0,0,0.9);
        font-weight: 100;
    }

    div.right-panel {
        position: absolute;
        float: right;
        top: 0;
    }

    .input-country {
        outline: none;
        border: none;
        font-size: 18px;
        width: 100%;
        border-bottom: 1px solid black;
    }

    @media (max-width: 650px) {
        div.widget {
            width: 96%;
            height: 230px;
        }

        div.city {
            width: 40%;
        }

        div.left-panel {
            flex-direction: column;
        }
    }

    @media (max-width: 350px) {
        div.widget {
            width: 96%;
            height: 260px;
        }
    }
</style>