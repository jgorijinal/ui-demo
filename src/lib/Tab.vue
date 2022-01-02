<template>
  <div>
    <slot />
  </div>

</template>

<script lang="ts">

export default {
  name:'Tab',
props:{
    title:{
      type:String,
      default:'defaultTab'
    }
}
}
</script>

<style lang="scss">

</style>