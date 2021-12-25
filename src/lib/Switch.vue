<template>
  <button :class="{checked:x}" @click="toggle">
    <span></span>
  </button>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Switch",
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value= !x.value
    }
    return{x, toggle}
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
