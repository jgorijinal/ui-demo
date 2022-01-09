<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav" ref="container">
      <div @click="select(title)" class="gulu-tabs-nav-item" :ref="el=> {if(title === selected) selectedItem = el } "
           :class="{selected:title === selected}" v-for="(title,index) in titles" :key="index">{{ title }}
      </div>
      <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>
.
<script lang="ts">


import {computed, onMounted, ref, watchEffect} from 'vue';
import Tab from './Tab.vue';
export default {
  props: {
    selected: {
      type: String
    }
  },
  name: 'Tab',
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(()=>{
      watchEffect(()=>{
        const {width} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';

        const {left: left1} = selectedItem.value.getBoundingClientRect();
        const {left: left2} = container.value.getBoundingClientRect();
        const left = left1 - left2;
        indicator.value.style.left = left + 'px';
      })
    })


    const defaults = context.slots.default();

    defaults.forEach(tag => {
      if (tag.type.name !== Tab.name) {
        throw new Error('Tabs的子标签必须是Tab');

      }
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected)
    })
    const titles = defaults.map(tag => tag.props.title);
    const select = (title: String) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles,current, select, selectedItem, indicator, container};
  }
};

</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-indicator {
      position: absolute;
      width: 100px;
      bottom: -1px;
      left: 0;
      height: 3px;
      background: $blue;
      transition: all 250ms;
    }

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;

  }
}
</style>