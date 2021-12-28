<template>
 <slot />
</template>

<script lang="ts">

export default {
  name:'Tab',
props:{
    title:{
      type:String,
      default:'Tab'
    }
}
}
</script>

<style lang="scss">

</style>