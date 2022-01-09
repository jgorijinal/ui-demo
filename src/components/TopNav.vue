<template>
  <div class="topNav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-dna"></use>
      </svg>
      <span class="logo-name">DNA-UI</span>
    </router-link>
    <ul class="menu">
      <li><router-link to="/doc/intro">文档</router-link></li>
    </ul>
    <span v-if="toggleMenuButtonVisible === true" class="toggleAside" @click="toggleMenu">
          <svg class="icon">
          <use xlink:href="#icon-menu"></use>
         </svg>
    </span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  },


};
</script>

<style lang="scss" scoped>
.topNav {
  color: black;
  display: flex;
  padding: 12px ;
  border-bottom: 1px solid #eaecef;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index:20;background: white;

  > .logo {
    max-width: 8em;
    margin-right: auto;
  display: flex;
    align-items: center;
    > svg {
      width: 36px;
      height: 36px;
    }
    >.logo-name{
      display:inline-block;
      font-size:1.3rem;
      font-weight: 500;
      margin-left: 10px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    align-items: center;
    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    display: none;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    >svg{
      color: black;
      width:32px;
      height:32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>