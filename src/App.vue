<template>
  <div>
    <nav>导航栏 |
      <router-link to="/">Frank</router-link> |
      <router-link to="/xxx">Test</router-link>
    </nav>
    <router-view />
  </div>

</template>

<script>

export default {
  name: 'App',

}
</script>
