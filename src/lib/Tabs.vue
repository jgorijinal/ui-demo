<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div @click="select(title)" class="gulu-tabs-nav-item" :class="{selected:title === selected}" v-for="(title,index) in results" :key="index" >{{title}}</div>
      <div class="gulu-tabs-nav-indicator"></div>
    </div>
    <div class="gulu-tabs-content">
     <component class="gulu-tabs-content-item" :class="{selected:tag.props.title === selected}"  v-for="(tag,index) in defaults" :is="tag"  :key="index"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  props:{
    selected:{
      type:String
    }
  },
  name: 'Tab',
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach(tag=>{
      if(tag.type !== Tab) {
        throw new Error('Tabs的子标签必须是Tab')
      }
    })
    const results = defaults.map(tag => tag.props.title)
    const select =  (title:String)=>{
      context.emit('update:selected',title)
    }
    return {defaults,results,select}
  }
};

</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-indicator{
      position: absolute;
      width:100px;
      bottom:-1px;
      left:0;
      height:3px;
      background: $blue;
    }
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
    display: none;
      &.selected{
        display:block;
      }
  }
  }
}
</style>