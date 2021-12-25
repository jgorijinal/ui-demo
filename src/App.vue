<template>
 <div>
    <router-view />
  </div>
</template>

<script lang="ts">

import {provide, ref} from 'vue';

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth

    const menuVisible = ref(width<=500 ?false : true)
   provide('menuVisible',menuVisible)
 }
}
</script>
<style lang="sass" scoped>

</style>