<demo>
1.常规使用
</demo>

<template>
  <div>
    <Button @click="toggle" level="main">Open Dialog</Button>
    <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="fn1" :cancel="fn2">
      <template v-slot:title>
        <strong>Title</strong>
      </template>
      <template v-slot:main>
        <p>Content of the dialog</p>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import {
  Button,
  Dialog
} from "../lib/index"
import {ref} from 'vue';

export default {
  components: {
    Dialog, Button
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const fn1 = () => {
      console.log(1);
    };
    const fn2 = () => {
      console.log(2);
    };
    return {x, toggle, fn1, fn2};
  }
};
</script>