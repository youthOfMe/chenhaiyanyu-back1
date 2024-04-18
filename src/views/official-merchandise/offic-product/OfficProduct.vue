<template>
  <div>
    <el-card>
      <el-form style="display: flex; justify-content: space-between">
        <el-form-item label="商品名">
          <el-input placeholder="请输入商品名进行搜索"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button slot="append" style="margin-left: 5px">搜索商品</el-button>
          <el-button slot="append" style="margin-left: 5px">添加商品</el-button>
          <el-button slot="append" style="margin-left: 5px">重置商品</el-button>
          <el-button slot="append" style="margin-left: 5px">删除商品</el-button>
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
        <el-table-column prop="id" label="ID" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="归属分类" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="价格" show-overflow-tooltip></el-table-column>
        <el-table-column label="图片" show-overflow-tooltip>
          <img style="width: 2w; height: 2vw" src="/public/logo.png" />
        </el-table-column>
        <el-table-column prop="name" label="描述" show-overflow-tooltip></el-table-column>
        <el-table-column prop="role" label="状态" show-overflow-tooltip></el-table-column>
        <el-table-column prop="date" label="创建时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="date" label="更新时间" show-overflow-tooltip></el-table-column>
        <el-table-column prop="role" label="创建者" show-overflow-tooltip></el-table-column>
        <el-table-column prop="role" label="更新者" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <div
              class="dialog-footer"
              style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              "
            >
              <el-button icon="Edit" style="width: 4vw" size="small">编辑</el-button>
              <el-button icon="Delete" style="width: 4vw; margin-right: 1vw" size="small">
                删除
              </el-button>
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
          style="margin-top: 2vw"
        />
      </div>
    </el-card>
    <el-dialog v-model="Visible" width="500">
      <div>
        <el-form :model="ruleForm" label-width="80px" ref="ruleForm">
          <h4 style="margin-bottom: 20px">{{ Data.id ? '修改商品' : '添加商品' }}</h4>
          <el-col :span="12">
            <el-form-item label="商品名称" prop="name">
              <el-input placeholder="输入商品姓名" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="入驻时间" prop="data">
              <el-input placeholder="输入当前时间" v-model="ruleForm.date"></el-input>
            </el-form-item>
            <el-form-item label="商品密码" prop="password">
              <el-input placeholder="输入商品密码" v-model="ruleForm.name"></el-input>
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
//保存信息
const save = () => {}
</script>

<style scoped></style>
