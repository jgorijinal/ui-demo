<template>
  <h1>实例1</h1>
  <Button>Hello</Button>
  <Button theme="button">button</Button>
  <Button theme="link">link</Button>
  <Button theme="text">text</Button>
  <h2>实例2</h2>
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
  <h2>实例3</h2>
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
  <h2>实例4</h2>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
  <h2>实例5</h2>
  <div>
    <Button loading>Loading </Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup() {
    const onClick = () => {
      console.log('hi');
    };
    return {onClick};
  }
};
</script>

<style lang="scss" scoped>

</style>