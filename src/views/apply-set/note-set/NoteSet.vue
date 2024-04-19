<template>
    <el-card>
        <el-form label="公告" style="display: flex;justify-content: space-between;">
            <el-form-item label="发布者">
                    <el-input placeholder="请输入发布者姓名进行搜索"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="addnote">新增公告</el-button>
                <el-button >查询公告</el-button>
                <el-button >编辑公告</el-button>
                <el-button >删除公告</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    <el-card style="margin-top: 5px;">
            <el-table :data="Data"  element-loading-text="拼命加载中" v-loading="loading" style="width: 100%">
                <el-table-column type="index" label="序号" align="center"></el-table-column>
                <el-table-column prop="id" label="用户ID" show-overflow-tooltip align="center"></el-table-column>
                <el-table-column prop="name" label="发布者" show-overflow-tooltip align="center"></el-table-column>
                <el-table-column prop="content" label="公告内容" show-overflow-tooltip align="center"> </el-table-column>
                <el-table-column prop="type" label="公告类型" show-overflow-tooltip align="center"> 
                    
                </el-table-column>
                <el-table-column label="操作"  >
                <template #default="{ row }">
                     <div class="dialog-footer">
                        <el-button icon="Edit" size="small" >编辑</el-button>
                        <el-button icon="Delete" size="small" type="danger">删除</el-button>
                    </div>
                </template>
                </el-table-column>
               
            </el-table>
            <div class="demo-pagination-block">
                <div class="demonstration"></div>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="params.page"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="params.pageSize"
                    :background="true"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                    /> 
            </div>   
       </el-card>
       <el-dialog
        v-model="Visible"
        title="新增公告"
        width="500">
        <div>
            <el-form  :model="ruleForm" label-width="80px"  ref="ruleForm">
                  <el-col >
                      <el-form-item label="用户ID" prop="id">
                          <el-input v-model="ruleForm.id"></el-input>
                      </el-form-item>
                      <el-form-item label="发布者" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="公告内容" prop="content">
                          <el-input v-model="ruleForm.content"></el-input>
                      </el-form-item>
                      <el-form-item label="公告类型" prop="type">
                     
                            <el-radio-group v-model="radio">
                                <el-radio :value="3">科学知识</el-radio>
                                <el-radio :value="6">商务接单</el-radio>
                                <el-radio :value="9">知识竞赛</el-radio>
                            </el-radio-group>
                      
                      </el-form-item>
                    </el-col> 
            </el-form> 
        </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="Visible = false">取消</el-button>
          <el-button type="primary" @click="Visible = false">确定</el-button>
        </div>
      </template>
      </el-dialog>
</template>

<script setup lang="ts">
import {ref,onMounted, } from 'vue'
import { post } from '@/utils/http'; 

const Visible=ref(false)
let Data = ref();
const total = ref(0);
const radio = ref(3)
const select = ref();
select.value = []
const params = ref({
  page: 1,
  pageSize: 10,
  keyword: ""
});
const loading = ref(false);
const ruleForm=ref({
  name:"",type:"",content:"",id:""
  })


onMounted(() => {
  loadData();
});
async function loadData() {
  loading.value = true;
  const res = await post("/note", params.value);//
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
const addnote= () => {
    Visible.value = true
  
  }



</script>

<style scoped></style>
