<template>
  <div class="ui inverted vertical menu">
    <router-link to="/main" active-class="active teal item" class="item">
      首页
    </router-link>
    <router-link to="/addproblem" active-class="active teal item" class="item">
      添加问题
    </router-link>
    <router-link to="/listproblem" active-class="active teal item" class="item">
      问题列表
    </router-link>
    <router-link to="/addcontest" active-class="active teal item" class="item">
      添加竞赛/作业
    </router-link>
    <router-link to="/listcontest" active-class="active teal item" class="item">
      竞赛/作业列表
    </router-link>
    <router-link to="/addsubject" active-class="active teal item" class="item">
      添加专题
    </router-link>
    <router-link to="/listsubject" active-class="active teal item" class="item">
      专题列表
    </router-link>
    <div class="item">

    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu'
}
</script>

<style scoped>

</style>
