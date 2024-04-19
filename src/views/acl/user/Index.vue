<template>
  <div>
    <el-card>
      <el-form style="display: flex; justify-content: space-between">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名进行搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button slot="append" style="margin-left: 5px">搜索用户</el-button>
          <el-button slot="append" style="margin-left: 5px" @click="addUser">添加用户</el-button>
          <el-button slot="append" style="margin-left: 5px">重置用户</el-button>
          <el-button slot="append" style="margin-left: 5px">删除用户</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card style="margin-top: 5px">
      <el-table
        :data="Data"
        element-loading-text="拼命加载中"
        v-loading="loading"
        style="width: 100%"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="id" label="用户ID" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="用户名称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="role" label="用户角色" show-overflow-tooltip></el-table-column>
        <el-table-column prop="password" label="用户密码" show-overflow-tooltip></el-table-column>
        <el-table-column prop="date" label="入驻日期" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <div class="dialog-footer">
              <el-button icon="Edit" size="small" @click="updateUser(row)">编辑</el-button>
              <el-button icon="Delete" size="small">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="demo-pagination-block">
        <div class="demonstration"></div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          @selection-change="handleSelectionChange"
          :current-page="params.page"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="params.pageSize"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        />
      </div>
    </el-card>
    <el-dialog v-model="Visible" width="500">
      <div>
        <el-form :model="ruleForm" label-width="80px" ref="ruleForm">
          <h4 style="margin-bottom: 20px">{{ Data.id ? '修改用户' : '添加用户' }}</h4>
          <el-col :span="12">
            <el-form-item label="用户名称" prop="name">
              <el-input placeholder="输入用户姓名" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="入驻时间" prop="data">
              <el-input placeholder="输入当前时间" v-model="ruleForm.date"></el-input>
            </el-form-item>
            <el-form-item label="用户密码" prop="password">
              <el-input placeholder="输入用户密码" v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="Visible = false">取消</el-button>
          <el-button type="primary" @click="save">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { post } from '@/utils/http'

const Visible = ref(false)
const Visible2 = ref(false)
let Data = ref()
const total = ref(0)
const select = ref()
select.value = []
const params = ref({
  page: 1,
  pageSize: 10,
  keyword: '',
})
const loading = ref(false)
const ruleForm = ref({
  name: '',
  date: '',
  password: '',
})

onMounted(() => {
  loadData()
})
async function loadData() {
  loading.value = true
  const res = await post('/user', params.value) //获取员工信息
  Data.value = res.data.list
  total.value = res.data.total
  loading.value = false
}
function handleSizeChange(pageSize: number) {
  params.value.pageSize = pageSize
  loadData()
}

function handleCurrentChange(page: number) {
  params.value.page = page
  loadData()
}
//勾选的数据
function handleSelectionChange(selection: any) {
  select.value = selection
}
//添加用户
const addUser = () => {
  //显示弹窗
  Visible.value = true
}
//更新编辑用户
const updateUser = (row: Date) => {
  Visible.value = true
}
//保存信息
const save = () => {}
</script>

<style scoped></style>
