<template>
  <div class="info">
    <el-card >
      <div style="display: flex;justify-content: space-between;">
        <div style="display: flex;">
          <el-input placeholder="请输入员工号或者员工名称" v-model="params.keyword" class="input-with-select">            
          </el-input>
          <el-button slot="append" style="margin-left: 5px;" >查询</el-button>
        </div>
        <div  class="operate">
          <el-button type="primary" @click="addEmployee">新增员工</el-button>
          <el-button :disabled="!select.length" @click="operate(1)">查询</el-button>
          <el-button :disabled="!select.length" @click="operate(2)">编辑</el-button>
          <el-button :disabled="!select.length" @click="operate(3)">删除</el-button>
        </div>
      </div>       
    </el-card>    
    <el-card >
      <el-table :data="tableData" style="width: 100%" v-loading="loading" element-loading-text="拼命加载中">
        <el-table-column type="selection"></el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="id" label="员工号" width="100"></el-table-column>
        <el-table-column prop="date" label="入职日期"></el-table-column>
        <el-table-column prop="name" label="员工名称"></el-table-column>
        <el-table-column prop="role" label="员工职务"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button size="small" @click="editEmployee(row)">编辑</el-button>
            <el-button type="danger" size="small" @click="deleteEmployee(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="mt fr mb"              
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="params.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        @selection-change="handleSelectionChange"
        :total="total">
      </el-pagination>         
    </el-card>
    <el-dialog
    v-model="dialogVisible"
    title="新增员工"
    width="500">
    <div>
      <el-form  :model="ruleForm" label-width="80px"  ref="ruleForm">
                <el-col :span="12">
                    <el-form-item label="员工名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="入职日期" prop="start">
                        <el-input v-model="ruleForm.date"></el-input>
                    </el-form-item>
                  </el-col> 
      </el-form> 
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
      </div>
    </template>
  </el-dialog>
  
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, } from 'vue';
import { post } from '@/utils/http'; 



const dialogVisible = ref(false)
const loading = ref(false);
const tableData = ref();

const params = ref({
  page: 1,
  pageSize: 10,
  keyword: ""
});
const total = ref(0);
const select = ref();
select.value = []
const ruleForm=ref({
  name:"",date:"",
  })

// 页面加载时加载数据
onMounted(() => {
  loadData();
});

async function loadData() {
  loading.value = true;
  const res = await post("/employee", params.value);//获取员工信息
  tableData.value = res.data.list;
  total.value = res.data.total;
  loading.value = false;
}
const addEmployee = () => {
  dialogVisible.value = true

}
const editEmployee = (row:any) => {
    console.log(row);
    
}
function handleSizeChange(pageSize:number) {
  params.value.pageSize = pageSize;
  loadData();
}

function handleCurrentChange(page:number) {
  params.value.page = page;
  loadData();
}
function handleSelectionChange(selection:any){
  select.value=selection
  }


function operate(type:any) {
  console.log(type);
  const nos = select.value.map((item :any)=> item.id);
  // proxy.$message.success("操作成功")
}

function deleteEmployee(id:number) {
  post("/delete", { id }).then(() => {
    // proxy.$message.success("操作成功")
    loadData();
  });
}



</script>

<style lang="scss" scoped></style>
