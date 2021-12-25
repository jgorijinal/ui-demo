<template>
  <button :class="{checked:value}" @click="toggle">
    <span></span>
  </button>
  <div>{{value === true ? '已确定' : '已取消'}}</div>
</template>

<script lang="ts">
import {ref} from "vue";

export default {
  name: "Switch",
  props:{value:Boolean},
  setup(props,context){
    const toggle = ()=>{
       context.emit('update:value',!props.value)
    }
    return{ toggle}
  }

}
</script>

<style lang="scss" scoped>
$h:22px;
$h2: $h - 4px;
button {
  width:$h *2;
  height: $h;
  background:grey;
  border: none;
  border-radius: $h/2;
  position: relative;
}
span{
  display: inline-block;
  width:$h2;
  height:$h2;
  background: white;
  border-radius: $h/2;
  position: absolute;
  left:2px;
  top:2px;
  transition: left 250ms ;
}
button.checked{
  background: blue;
 span{
   left:23px;
 }
}

</style>
