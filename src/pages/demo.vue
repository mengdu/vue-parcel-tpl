<template>
<div>
  <div style="margin-top: 150px;"></div>
  <div class="demo-test">
    <!-- <input type="text" v-model="text"> -->
    <py-keyboard @key="handleKey" height="250" lang="zh"></py-keyboard>

  </div>
</div>
</template>
<script>
import PyKeyboard from '../m/keyboard/py-keyboard'

export default {
  data () {
    return {
      text: ''
    }
  },
  components: {
    PyKeyboard
  },
  watch: {
    text (val) {
      // console.log(val)
    }
  },
  methods: {
    handleKey (key) {
      this.text += key
    }
  }
}
</script>
<style>
  .demo-test{
    margin: 0 auto;
    width: 800px;
    height: 250px;
  }
</style>
