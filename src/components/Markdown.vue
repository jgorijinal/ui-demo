<template>
  <article class="markdown-body" v-html="content"></article>
</template>


<script lang="ts">
import {ref} from 'vue';

export default {
  props:{
    path:{
      type:String,
      required:true
    }
  },
setup(props){
    const content = ref<string>(null)
  console.log(import(props.path))
    import(props.path).then(result=>{     //import是 promise异步操作
        content.value = result.default
  })
  return {content}
}
}
</script>

<style lang="scss">

</style>