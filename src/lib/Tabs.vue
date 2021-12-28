<template>
  <div v-for="(title,index) in results" :key="index">{{title}}</div>
  <component v-for="(tag,index) in defaults" :key="index" :is="tag"></component>
</template>

<script lang="ts">
import  Tab from './Tab.vue'
export default {
name:'Tab',
setup(props,context){
  //console.log(context.slots.default()[0].type  === Tab)
 const defaults = context.slots.default()
  console.log(defaults)
  defaults.forEach(tags=> {
   if(tags.type !== Tab) {
     throw new Error('Tabs的子组件必须是Tab')
   }
  })
  const results= defaults.map(tags=>tags.props.title)
 return {defaults,results}
}
}
</script>

<style lang="scss">

</style>