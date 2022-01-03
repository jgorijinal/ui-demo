<template>
  <div class="topnavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>DNA-UI</h1>
      <h2>一个厉害的UI框架</h2>
      <p class="actions">
        <a href="https://github.com">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <div class="wrapper">
          <h2>
            基于 Vue 3
          </h2>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </div>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <div class="wrapper">
          <h2>基于 TypeScript </h2>
          <p>源代码采用TypeScript书写（非严格检查）</p>
        </div>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <div class="wrapper">
          <h2>代码易读</h2>
          <p>每个组件的源代码都读起来极其简洁</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
.topnavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.features {
  ul {
    width: 375px;
    margin: 64px auto;
    @media(min-width: 800px) {
      width: 800px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    } 
    @media (min-width:1200px){
      width: 1200px;
      display: flex;
      justify-content: space-around;

    }

    li {
      display: flex;
      align-items: center;
      margin: 16px 0;
      width: 375px;

      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    svg {
      width: 64px;
      height: 64px;
      margin-right: 10px;
    }
  }
}
</style>