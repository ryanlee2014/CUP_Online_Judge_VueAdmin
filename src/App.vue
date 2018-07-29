<template>
  <div id="app">
    <div class="side menu main">
      <SideMenu></SideMenu>
    </div>
    <div class="main content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/views/SideMenu'

export default {
  name: 'App',
  components: {SideMenu}
}
</script>

<style>
  .main.content {
    margin-left: 250px;
    padding-top: 20px;
  }

  .side.menu.main {
    position: fixed;
    width: 250px;
  }
</style>
