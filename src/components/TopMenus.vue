<template>
    <el-row class="top-menu">
        <el-col class="padding-l" :xl="1" :lg="1" :md="1" :sm="2" :xs="2">
            <el-link :underline="false" @click="doCollapse(!isCollapse)">
                <el-icon
                        class="index-collapse-icon"
                        :name="isCollapse ? 's-unfold' : 's-fold'"
                ></el-icon>
            </el-link>
        </el-col>
        <el-col
                class="padding text-right"
                :xl="23"
                :lg="23"
                :md="23"
                :sm="22"
                :xs="22"
        >
            <el-dropdown class="margin-l">
        <span class="el-dropdown-link">
          语言<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>中文</el-dropdown-item>
                    <el-dropdown-item>English</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="margin-l">
        <span class="el-dropdown-link">
            <el-icon name="s-open"/>
          主题<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :key="theme.id" v-for="theme in $themeList" @click.native="$changeTheme(theme)">
                        <el-icon v-if="$store.getters['Theme/currentTheme'] === theme" name="check"/>
                        {{theme.name}}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown class="margin-l">
        <span class="el-dropdown-link">
          <el-icon name="s-custom"/>
          管理员<i class="el-icon-arrow-down el-icon--right"/>
        </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人资料</el-dropdown-item>
                    <el-dropdown-item @click.native="$router.push('/login')">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'TopMenus',
  props: {
    menuCollapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const { menuCollapse } = this.$props
    return {
      isCollapse: menuCollapse
    }
  },
  methods: {
    doCollapse (collapse) {
      this.isCollapse = collapse
      this.$emit('update:menuCollapse', collapse)
    }
  }
}
</script>

<style scoped></style>
