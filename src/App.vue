<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default{
  name: 'App',
}
</script>

<style>
/* @import './assets/css/index.css'; */
    .btnContent{
        display: flex;
        justify-content: center;
    }
    p{
      margin-bottom: 20px;
      font-size: 30px;
    }
    *{
      margin: 0;
      padding: 0;
    }
</style>
