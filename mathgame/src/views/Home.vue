<template>
  <div class="parent">
    <start-page v-show="status=='startpage'"></start-page>
    <main-page v-show="status=='mainpage'"></main-page>
    <correct-page v-show="status=='correctpage'"></correct-page>
    <wrong-page v-show="status=='wrongpage'"></wrong-page>
  </div>
</template>

<script>
import startPage from '@/components/startPage.vue'
import mainPage from '@/components/mainPage.vue'
import correctPage from '@/components/correctPage.vue'
import wrongPage from '@/components/wrongPage.vue'

export default {
  components: {
    startPage,
    mainPage,
    correctPage,
    wrongPage
  },
  data() {
    return {
      status: 'mainpage'    //startpage, mainpage, correctpage, wrongpage, endpage
    }
  },
  methods: {
    changeStatus(val) {
      this.status = val
    }
  },
  created() {
    this.$bus.$on('changeStatus', this.changeStatus)
  }
}
</script>

<style scoped>
  .parent {
    height: 100vh;
    width: 500px;
    max-width: 100%;
    border: 1px solid #ddd;    
    margin: auto;
  }
</style>
