const app = Vue.createApp({
    
    data() {
        return {
            suhu1: 0,
            suhu2: 0,
            option1: '',
            option2: '',
        }
    },
    watch: {
        option1(value){
            if (value === 'Celcius'){
                if (this.option2 === 'Celcius'){ //celcius ke celcius
                    this.suhu2 = this.suhu1;
                }
                if (this.option2 === 'Fahrenheit'){ //celcius ke fahrenheit
                    var result = (this.suhu1*9/5) + 32;
                    this.suhu2 = result;
                }
                if (this.option2 === 'Kelvin'){ //celcius ke kelvin
                    var result = Number(this.suhu1) + 273.15;
                    this.suhu2 = result;
                }
            }
            if (value === 'Fahrenheit'){
                if (this.option2 === 'Celcius'){ //fahrenheit ke celcius
                    var result = (this.suhu1 - 32) * 5 / 9;
                    this.suhu2 = result;
                }
                if (this.option2 === 'Fahrenheit'){ //fahrenheit ke fahrenheit
                    this.suhu2 = this.suhu1;
                }
                if (this.option2 === 'Kelvin'){//fahrenheit ke kelvein
                    var result = ((this.suhu1-32) * 5/9) + 273.15;
                    this.suhu2 = result
                }
            }
            if (value === 'Kelvin'){
                if (this.option2 === 'Celcius'){//kelvin ke celcius
                    var result = this.suhu1 - 273.15;
                    this.suhu2 = result;
                }
                if (this.option2 === 'Fahrenheit'){//kelvin ke fahrenheit
                    var result = ((this.suhu1-273.15)* 9/5) + 32;
                    this.suhu2 = result;
                }
                if (this.option2 === 'Kelvin'){//kelvin ke kelvin
                    this.suhu2 = this.suhu1;
                }
                
            }
        },
        option2(value){
            if (value === 'Celcius'){
                if (this.option2 === 'Celcius'){ //celcius ke celcius
                    this.suhu2 = this.suhu1;
                }
                if (this.option2 === 'Celcius'){ //fahrenheit ke celcius
                    var result = (this.suhu1 - 32) * 5 / 9;
                    this.suhu2 = result;
                }
                if (this.option2 === 'Celcius'){//kelvin ke celcius
                    var result = this.suhu1 - 273.15;
                    this.suhu2 = result;
                }
            }
            if (value === 'Fahrenheit'){
                if (this.option2 === 'Fahrenheit'){ //celcius ke fahrenheit
                    var result = (this.suhu1*9/5) + 32;
                    this.suhu2 = result;
                }
                if (this.option2 === 'Fahrenheit'){ //fahrenheit ke fahrenheit
                    this.suhu2 = this.suhu1;
                }
                if (this.option2 === 'Fahrenheit'){//kelvin ke fahrenheit
                    var result = ((this.suhu1-273.15)* 9/5) + 32;
                    this.suhu2 = result;
                }
            }
            if (value === 'Kelvin'){
                if (this.option2 === 'Kelvin'){ //celcius ke kelvin
                    var result = Number(this.suhu1) + 273.15;
                    this.suhu2 = result;
                }
                if (this.option2 === 'Kelvin'){//fahrenheit ke kelvein
                    var result = ((this.suhu1-32) * 5/9) + 273.15;
                    this.suhu2 = result
                }
                if (this.option2 === 'Kelvin'){//kelvin ke kelvin
                    this.suhu2 = this.suhu1;
                }
                
            }
        },
    }
})

app.mount('#app')