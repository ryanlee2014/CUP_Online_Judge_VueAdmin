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
    <router-link to="/createaccount" active-class="active teal item" class="item">
      账号生成
    </router-link>
    <router-link to="/checkaccount" active-class="active teal item" class="item">
      账号验证
    </router-link>
    <router-link to="/changepassword" active-class="active teal item" class="item">
      修改密码
    </router-link>
    <router-link to="/problemrejudge" active-class="active teal item" class="item">
      重判题目
    </router-link>
    <router-link to="/addprivilege" active-class="active teal item" class="item">
      修改权限
    </router-link>
    <router-link to="/listprivilege" active-class="active teal item" class="item">
      权限列表
    </router-link>
    <router-link to="/globalsetting" active-class="active teal item" class="item">
      全局设置
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
