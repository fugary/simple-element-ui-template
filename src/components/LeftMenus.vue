<template>
  <el-menu class="index-menu" :collapse="isCollapse" router>
    <el-row>
      <el-col class="text-center padding-tb">
        <router-link class="index-title" to="/">{{ logoTitle }}</router-link>
      </el-col>
    </el-row>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </template>
      <el-menu-item index="/admin/user-list">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/admin/role-list">
        <i class="el-icon-user-solid"></i>
        <span slot="title">角色管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-lock"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">菜单管理</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'LeftMe nus',
  props: {
    menuCollapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const { menuCollapse } = this.$props
    const appName = process.env.VUE_APP_APP_NAME
    const appNameSimple = process.env.VUE_APP_APP_NAME_SIMPLE
    return {
      isCollapse: menuCollapse,
      logoTitle: appName,
      appName,
      appNameSimple
    }
  },
  watch: {
    menuCollapse: function (collapse) {
      if (collapse) {
        this.logoTitle = this.appNameSimple
        this.$nextTick(() => {
          this.isCollapse = collapse
        })
      } else {
        this.logoTitle = this.appName
        this.isCollapse = collapse
      }
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style scoped></style>
