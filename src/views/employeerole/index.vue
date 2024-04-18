<template>
    <el-card>
        <el-form label="角色" style="display: flex;justify-content: space-between;">
            <el-form-item label="用户名">
                    <el-input placeholder="请输入用户名进行搜索"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" slot="append" style="margin-left: 5px;">添加角色</el-button>
                <el-button  slot="append" style="margin-left: 5px;">编辑角色</el-button>
                <el-button slot="append" style="margin-left: 5px;">删除角色</el-button>
                <el-button slot="append" style="margin-left: 5px;">搜索角色</el-button>

            </el-form-item>
        </el-form>
    </el-card>
    <el-card style="margin-top: 5px;">
            <el-table :data="Data"  element-loading-text="拼命加载中" v-loading="loading" style="width: 100%">
                <el-table-column type="index" label="序号" align="center"></el-table-column>
                <el-table-column prop="id" label="用户ID" show-overflow-tooltip align="center"></el-table-column>
                <el-table-column prop="name" label="用户名称" show-overflow-tooltip align="center"></el-table-column>
                <el-table-column prop="role" label="用户角色" show-overflow-tooltip align="center"> </el-table-column>
                <el-table-column label="操作"  >
                <template #default="{ row }">
                     <div class="dialog-footer">
                        <el-button icon="user" size="small" >权限分配</el-button>
                        <el-button icon="Edit" size="small" >编辑</el-button>
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
</template>

<script setup lang="ts">
import {ref,onMounted, } from 'vue'
import { post } from '@/utils/http'; 

const Visible=ref(false)
let Data = ref();
const total = ref(0);
const select = ref();
select.value = []
const params = ref({
  page: 1,
  pageSize: 10,
  keyword: ""
});
const loading = ref(false);
const ruleForm=ref({
  name:"",date:"",password:""
  })


onMounted(() => {
  loadData();
});
async function loadData() {
  loading.value = true;
  const res = await post("/employeerole", params.value);//
  Data.value = res.data.list;
  total.value = res.data.total;
  loading.value = false;
}
function handleSizeChange(pageSize:number) {
  params.value.pageSize = pageSize;
  loadData();
}

function handleCurrentChange(page:number) {
  params.value.page = page;
  loadData();
}
//勾选的数据
function handleSelectionChange(selection:any){
  select.value=selection
  }



</script>

<style scoped></style>