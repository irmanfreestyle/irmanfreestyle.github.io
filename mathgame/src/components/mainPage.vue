<template>
    <v-layout column wrap justify-center  class="parent-main pa-3 basic-animate">
        <v-flex xs6>
            <v-layout row justify-space-around justify-center align-center wrap style="height:100%;">
                <v-flex xs12>
                    <h5 class="text-xs-center">
                        <v-icon class="pa-2" color="black" v-for="(life, i) in lifes" :key="i">favorite</v-icon>
                        <v-icon class="pa-2" color="black" v-for="(n, i) in 3 - lifes" :key="i">favorite_border</v-icon>
                    </h5>
                    <h1 class="text-xs-center py-2">Your Time</h1>
                    <div class="progress-parent">
                        <div ref="timerBar" class="progress yellow"></div>
                    </div>
                </v-flex>
                <h1 class="math font-weight-thin white--text text-xs-center">
                    {{num1}}{{op}}{{num2}}=
                    <span class="orange--text">
                        {{userAnswer}}
                    </span>
                </h1>
            </v-layout>
        </v-flex>
        <v-flex xs6>
            <v-layout row wrap class="chosse-parent">
                <v-flex xs6 v-for="(btn, i) in answerBtn" :key="i">
                    <v-btn block class="button-choose" :color="btn.color" dark large @click="answer(btn.val)">
                        {{btn.val}}
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            lifes: 3,
            start: false,
            interval: false,
            timerBar: 0,
            answerBtn: [],

            num1: '',
            num2: '',
            rightAnswer: '',
            op: '',
            userAnswer: '?'
        }
    },        
    created() {
        this.startGame()
    },
    methods: {
        answer(answer) {
            this.evaluate(this.num1, this.num2, this.op, answer, 'a')      
            this.userAnswer = answer;      

            setTimeout(() => {
                if(this.userAnswer === this.rightAnswer) {
                    this.$bus.$emit('changeStatus', 'correctpage')
                    setTimeout(() => {
                        this.$bus.$emit('changeStatus', 'mainpage')
                    }, 1500)
                    this.startGame()
                } else {
                    if(this.lifes > 0) {
                        this.$bus.$emit('changeStatus', 'wrongpage')
                        setTimeout(() => {
                            this.$bus.$emit('changeStatus', 'mainpage')
                        }, 1500)
                        this.lifes--
                        this.startGame()
                    } else {
                        this.$bus.$emit('gameOver')
                    }
                }
            }, 500)
        },
        randomize(start, limit) {
            return Math.round(Math.random() * limit + start)
        },
        startGame() {
            let op = ['+', '-', 'x', '/']

            this.answerBtn = []
            this.userAnswer = '?'

            this.num1 = this.randomize(0, 15)
            this.num2 = this.randomize(0, 15)            
            this.op = op[this.randomize(0, 3)]
            
            while(this.num1 < this.num2) {
                this.num1 = this.randomize(0, 15)
                this.num2 = this.randomize(0, 15)            
            }
            
            setTimeout(() => {
                this.evaluate(this.num1, this.num2, this.op, null, 'a')                            
                this.randomizeAnswerBtn(this.num1, this.num2)
                console.log(this.rightAnswer)
            }, 500)
        },
        evaluate(num1, num2, op, userAnswer, getResult) {                 
            switch(op) {
                case '+':
                    (getResult == 'return') ? (num1+num2 == userAnswer) : this.rightAnswer = (num1+num2)
                    break;
                    
                    case '-':
                        (getResult == 'return') ? (num1-num2 == userAnswer) : this.rightAnswer = (num1-num2)
                        break;

                        case 'x':
                            (getResult == 'return') ? (num1*num2 == userAnswer) : this.rightAnswer = (num1*num2)
                            break;

                            case '/':
                                (getResult == 'return') ? (num1/num2 == userAnswer) : this.rightAnswer = (num1/num2)
                                break;

            }
        },
        floatToDecimal(number) {
            if(!Number.isInteger(this.rightAnswer)) {
                return Number(this.rightAnswer.toString().split('')[0]+'.'+this.rightAnswer.toString().split('')[2])
            }
            return number
        },
        startInterval() {
            this.interval = setInterval(this.timer, 300)
        },
        stopInterval() {
            clearInterval(this.interval)
        },
        timer() {
            let timerBar = this.$refs.timerBar
            this.timerBar+=2
            if(this.timerBar >= 100) {
                this.stopInterval()
            }
            timerBar.style.width = this.timerBar+'%'            
        },        
        resetTimer() {
            this.stopInterval()
            this.startInterval()
        },
        randomizeAnswerBtn(num1, num2) {
            let colors = ['purple', 'deep-orange darken-2', 'pink', 'cyan']
            for(let i = 0; i <= 3; i++) {
                this.answerBtn.push({
                    val: this.randomize(0, 20),
                    color: colors[i]
                })
            }

            this.answerBtn[this.randomize(0, 3)].val = this.rightAnswer
        }
    }
}
</script>


<style scoped>
    h1.math {
        font-size: 5em;
    }
    .parent-main {      
        width: 100%;  
        height: 100%;
        color: white;
        background: dodgerblue;
    }
    .progress-parent {
        height: 10px;
        width: 100%;
        border-radius: 20px;       
        border: 0.5px solid white; 
    }
    .progress {
        width: 0%;
        height: 100%;
        transition: 0.3s;
    }
    .chosse-parent {
        height: 100%;
    }
    .chosse-parent div {        
        padding: 5px;
    }
    .chosse-parent .button-choose {                
        height: 100%!important;
        border-radius: 20px!important;
        font-size: 3em!important;
    }
    
</style>
