<template>
    <h1>第一个实例</h1>
    <h2>按钮</h2>
  <div>
    <Button>你好</Button>
  </div>
 </template>

<script  lang="ts">
import Button from '../lib/Button.vue'
export default {
  name: "ButtonDemo",
  components:{Button}
}
</script>

<style scoped>

</style>