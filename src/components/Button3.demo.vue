<demo>
3.支持 level属性
</demo>

<template>
  <div>
    <div>
      <Button level="main">Main</Button>
      <Button level="normal">Default</Button>
      <Button level="danger">Danger</Button>
    </div>
    <div>
      <Button theme="link" level="main">Main</Button>
      <Button theme="link" level="normal">Default</Button>
      <Button theme="link" level="danger">Danger</Button>

    </div>
    <div>
      <Button theme="text" level="main">Main</Button>
      <Button theme="text" level="normal">Default</Button>
      <Button theme="text" level="danger">Danger</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button}
};
</script>