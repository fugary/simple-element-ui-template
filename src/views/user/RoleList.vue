<template>
  <el-container>
    <el-main>
      <el-breadcrumb separator="/" class="padding-b">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>角色管理</el-breadcrumb-item>
      </el-breadcrumb>
      <el-table :data="tableData">
        <el-table-column prop="name" label="角色名" width="140">
        </el-table-column>
        <el-table-column prop="code" label="角色代码" width="120">
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag
              effect="dark"
              size="mini"
              :type="scope.row.status === 1 ? 'primary' : 'danger'"
              disable-transitions
              >{{ scope.row.status === 1 ? "启用" : "禁用" }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'RoleList',
  data () {
    const tableData = [
      {
        name: '管理员',
        code: 'Admin',
        status: 1
      },
      {
        name: '员工',
        code: 'Employee',
        status: 0
      }
    ]
    return {
      tableData
    }
  }
}
</script>

<style scoped></style>
