<template>
  <h1>实例1</h1>
  <Button @click="toggle" >toggle</Button>
  <Dialog  v-model:visible="x" :closeOnClickOverlay="true" :ok="fn1" :cancel="fn2">
    <template v-slot:title>
      <strong>Title</strong>
    </template>
    <template v-slot:main>
     <p>Content of the modal</p>
    </template>
  </Dialog>
  <h1>实例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script  lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog';
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
    const showDialog=()=> {
          openDialog({
            title:'这里是标题',
            content:'这里是内容',
            ok:()=>{
              console.log('ok')
            },
            cancel:()=>{
              console.log('cancel')
            }
          })
    }
    return {x,toggle,fn1,fn2,showDialog}
  }
}
</script>

<style scoped>

</style>