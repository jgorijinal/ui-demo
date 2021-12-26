<template>
    <h1>第一个实例</h1>
    <h2>按钮</h2>
  <div>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick">你好</Button>
  </div>
 </template>

<script  lang="ts">
import Button from '../lib/Button.vue'
export default {
  name: "ButtonDemo",
  components:{Button},
  setup(){
    const onClick =()=>{
      console.log('hi')
    }
    return {onClick}
  }
}
</script>

<style scoped>

</style>