<demo>
2.支持 size属性
</demo>

<template>
  <div>
    <div>
      <Button size="big">Large</Button>
      <Button size="normal">Default</Button>
      <Button size="small">Small</Button>
    </div>
    <div>
      <Button theme="link" size="big">Large</Button>
      <Button theme="link" size="normal">Default</Button>
      <Button theme="link" size="small">Small</Button>
    </div>
    <div>
      <Button theme="text" size="big">Large</Button>
      <Button theme="text" size="normal">Default</Button>
      <Button theme="text" size="small">Small</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>