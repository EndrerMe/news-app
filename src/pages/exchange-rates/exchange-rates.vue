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
        <!-- <div class="rate-items">
            <div class="rate-item" v-for="value of itemValue">
                <h3 class="rate">{{ value }}: {{ rates[value] }}</h3>
            </div>
        </div> -->

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
                // valuesFrom: ['GBP', 'EUR', 'RUB', 'CHF'],
                // valuesTo: ['EUR', 'GBP', 'RUB', 'CHF'],
                // itemValue: ['EUR', 'GBP', 'RUB', 'CHF'],
                exchangeTo: '',
                exchangeName: 'EUR',
                rateAmount: 100,
                isLoaderShow: false,
            }
        },
        created() {
            this.isLoaderShow = true;
            // for (let i = 0; i < this.itemValue.length; i++) {
            //     if (this.itemValue[i] === this.currentRate) {
            //         this.itemValue.splice(i,1);
            //     }
            // }

            ratesService.getRates(this.currentRate).then(res => {
                for (let i in res.data.rates) {
                    this.ratesName.push(i);
                }
                this.ratesValue = res.data.rates;
                this.isLoaderShow = false;
            });

            // ratesService.getRates(this.currentRate).then(res => {
            //     let result = this.rates[this.exchangeName];
            //     this.rates = res.data.rates;
            //     this.exchangeTo = result;
            //     this.isLoaderShow = false;
            // });

            window.mobilecheck = function() {
                let check = false;
                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
                console.log(check)
                return check;
            };
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
                //this.$refs['rates'].style.paddingTop = '0'
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