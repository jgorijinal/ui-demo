<template>
  <div class="layout">
    <TopNav class="nav" :toggle-menu-button-visible="true"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
             <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main >
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const menuVisible = inject('menuVisible');
    return {menuVisible: menuVisible};
  }

};
</script>
<style lang="scss" scoped>
$aside-index:10;
*{
box-sizing: border-box;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 186px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: white; //////////////////////////
  width: 180px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  height: 100%;
  border-right: 1px solid #cec9c9;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding-left: 16px;
  }
  > ol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > li {

      &:hover{
        color: #3eaf7c;
      }
      a {
        padding: 4px 16px;
        display: block;
      }
    }
  }
  .router-link-active {
    font-weight: 600;
    color: #3eaf7c;
  }
}
main {
  overflow: auto;
}
</style>