<demo>
5.支持 显示加载中
</demo>

<template>
  <div>
    <Button loading>Loading </Button>
    <Button>加载完毕</Button>
  </div>
</template>

<script lang="ts">
import {Button} from '../lib/index';

export default {
  components: {Button}
};
</script>