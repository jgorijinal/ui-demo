<template>
  <button :class="{checked:value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  name: 'Switch',
props:{
    value:Boolean
},
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }

};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  width: $h *2;
  height: $h;
  background: #bfbfbf;
  border: none;
  border-radius: $h/2;
  position: relative;

  span {
    display: inline-block;
    width: $h2;
    height: $h2;
    background: white;
    border-radius: $h/2;
    position: absolute;
    left: 2px;
    top: 2px;
    transition: all 250ms;
  }
}

button.checked {
  background: #1890ff;

  span {
    left: calc(100% - #{$h2} - 3px);
  }
  &:active {
  > span {
    width: $h2 + 4px;
    margin-left: -4px;
  }
}
}

button:active {
  > span {
    width: $h2 + 4px;
  }
}


</style>
