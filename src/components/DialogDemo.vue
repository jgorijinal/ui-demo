<template>
  <h1>dialog组件</h1>
  <Button @click="toggle" >toggle</Button>
  <Dialog title="这里是标题" v-model:visible="x" :closeOnClickOverlay="false" :ok="fn1" :cancel="fn2">
    <h1>hello</h1>
    <p>Dialog组件</p>
  </Dialog>
</template>

<script  lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue';
export default {
  components:{
    Dialog,Button
  },
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const fn1= ()=>{
      console.log(1)
    }
    const fn2=()=>{
      console.log(2)
    }
    return {x,toggle,fn1,fn2}
  }
}
</script>

<style scoped>

</style>