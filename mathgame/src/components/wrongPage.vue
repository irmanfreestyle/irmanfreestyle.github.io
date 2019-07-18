<template>
    <v-layout column wrap justify-center align-center class="parent-start red basic-animate">
        <v-icon color="white" size="100">close</v-icon>
        <h1 class="white--text">{{text}}</h1>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            text: 'Wrong Answer'
        }
    },
    methods: {
        changeText() {
            if(text !== undefined) {
                this.text = 'GAME OVER'
                alert()
            }
        }
    },
    created() {
        this.$bus.$on('gameOver', this.changeText)
    }
}
</script>


<style scoped>
    .parent-start {        
        height: 100%;
    }
</style>
