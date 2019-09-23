<template>
    <div class="rates" ref="rates">

        <div class="rates-type">
            <input v-on:input="changeAmount($event)" type="number" placeholder="Amount" class="amount" @focus="focusOn" @blur="focusOut">
            <span> Exchange rate from </span>
            <select v-on:change="changeCurrentRate($event)">
                <option v-for="value of ratesName" :value="value" v-if="value !== exchangeName" v-bind:selected="value == currentRate">{{ value }}</option>
            </select>
            <span> to </span>
            <select v-on:change="changeRateTo($event)">
                <option v-for="value of ratesName" :value="value" v-if="value !== currentRate" v-bind:selected="value == exchangeName">{{ value }}</option>
            </select>
        </div>
        <div class="current-rate-container">
            <h2 class="current-rate">{{ rateAmount }} {{ currentRate }}: {{ exchangeName }} {{ exchangeTo }}</h2>
        </div>

        <div v-show="isLoaderShow" class="loader-container">
            <loader class="loader"></loader>
        </div>
    </div>
</template>

<script>
import ratesService from './../../shared/services/rates.service'
import loader from './../../shared/components/loader';
import _ from 'lodash'

    export default {
        name: 'ExchangeRages',
        components: {
            loader
        },
        data() {
            return {
                ratesName: [],
                ratesValue: {},
                currentRate: 'USD',
                currentRateValue: '',
                exchangeTo: '',
                exchangeName: 'EUR',
                rateAmount: 100,
                isLoaderShow: false,
            }
        },
        created() {
            this.isLoaderShow = true;

            ratesService.getRates(this.currentRate).then(res => {
                for (let i in res.data.rates) {
                    this.ratesName.push(i);
                }
                this.ratesValue = res.data.rates;
                this.isLoaderShow = false;
            });

        },
        methods: {
            changeCurrentRate(event) {
                this.isLoaderShow = true;
                let target = event.target.value;
                this.currentRate = target;
                this.itemValue = ['EUR', 'USD', 'RUB', 'CHF'];

                for (let i = 0; i < this.itemValue.length; i++) {
                    if (this.itemValue[i] === this.currentRate) {
                        this.itemValue.splice(i,1);
                    }
                }

                ratesService.getRates(this.currentRate).then(res => {
                    this.rates = res.data.rates;
                    this.currentRateValue = this.rates[this.currentRate];

                    this.exchangeTo = this.rates[this.exchangeName];
                    
                    this.isLoaderShow = false;
                });
            },

            changeRateTo(event) {
                this.isLoaderShow = true;
                let target = event.target.value;

                ratesService.getRates(this.currentRate).then(res => {
                    this.rates = res.data.rates;
                    this.exchangeTo = this.rates[target];
                    this.exchangeName = target;

                    this.isLoaderShow = false;
                });
            },

            changeAmount:_.debounce(async function(event) {
                this.isLoaderShow = true;
                const value = event.target.value;

                this.rateAmount = value;

                const res = await ratesService.getRates(this.currentRate);

                if (this.exchangeTo === 0) {
                    this.exchangeTo = res.data.rates[this.exchangeName]
                    this.exchangeTo = this.exchangeTo * value;
                } else {
                    this.exchangeTo = this.exchangeTo * value;
                }
                
                this.rates = res.data.rates;

                for (let item in this.rates) {
                    if (typeof this.rates[item] == 'number') {
                        this.rates[item] = this.rates[item] * value;
                    }
                    continue;
                }
                this.isLoaderShow = false;
            }, 1000),

            focusOn() {
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    this.$emit('toggleHeadAndFoot', false);
                }
            },

            focusOut() {
                this.$emit('toggleHeadAndFoot', true);
            }
        }
        
    }
</script>

<style scoped>
    .rates {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%; 
        height: 100vh;
        top: 0;
        margin: 0 auto;
    }

    .rates-type {
        margin-top: -15em;
    }

    .current-rate-container {
        margin-top: 12px;
    }

    .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: rgba(255, 255, 255, .7);
        width: 100%;
        height: 100%;
    }

    .loader {
        
    }

    .rate-items {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 35px;
        justify-content: center;
        background-color: #ffffff;
    }

    .rate-item {
        border: 1px solid #f0f0f0;
        margin-left: 25px;
        padding: 25px 20px;
        margin-top: 10px;
    }

    .amount {
        border: none;
        outline: none;
        width: 90px;
        padding: 2px 5px;
        border-bottom: 1px solid #d1d1d1;
    }

    .rate {
        font-size: 27px;
    }

    @media (max-width: 840px) {
        .rate {
            font-size: 20px;
        }

        .rates-type {
            margin-top: 0;
        }
    }

    @media (max-width: 650px) {
        .rate {
            font-size: 18px;
        }

        .rates-type {
            margin-top: 150px;
        }

        .rate-item {
            margin-left: 0;
        }

        .current-rate {
            font-size: 18px;
        }

        .rate-items {
            margin-top: 10px;
        }

        .rate-item {
            padding: 10px 15px;
            margin-top: 10px;
        }

        .rates-type {
            margin-top: -7em;
        }
    }

    @media (max-width: 670px) {
        .rates-type {
            margin-top: 0;
        }
    }
</style>