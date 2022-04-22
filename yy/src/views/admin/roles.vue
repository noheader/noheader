<template>

    <div class="box">
<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/admin/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
<br>
<!-- 添加角色的模态框 -->
<el-button type="primary" @click="Isshow = true">打开嵌套表单的 Dialog</el-button>

<el-dialog title="收货地址" :visible.sync="Isshow"  >
  <el-form :model="form" :rules="rules" ref="form">
    <el-form-item label="角色名称" prop="roleName">
      <el-input v-model="form.roleName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="角色描述" prop="roleDesc">
      <el-input v-model="form.roleDesc" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="Isshow = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </div>
</el-dialog>
<!-- 添加角色的模态框 -->
<!-- 表格 -->
<el-table
    :data="tableData" border style="width: 100%" >
    <el-table-column type="index" label="#" >
    </el-table-column>
    <el-table-column prop="roleName" label="角色名称" >
    </el-table-column>
    <el-table-column prop="roleDesc" label="角色描述">
    </el-table-column>
    <el-table-column  label="操作">
        <template slot-scope="scope">
            <el-button type="success" @click="emit(scope.row)">编辑</el-button>
        <el-button type="danger" @click="sc(scope.row
        .id)">删除</el-button> 
        </template>
       
    </el-table-column>
  </el-table>
<!-- 表格 -->
<!-- 编辑勃太空 -->
<el-dialog title="收货地址" :visible.sync="Isemit"  >
  <el-form :model="emit_form" :rules="rules" ref="form">
    <el-form-item label="角色名称" prop="name">
      <el-input v-model="emit_form.roleName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="角色描述" prop="desc">
      <el-input v-model="emit_form.roleDesc" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="Isemit = false">取 消</el-button>
    <el-button type="primary" @click="emitlist">确 定</el-button>
  </div>
</el-dialog>
<!-- 编辑勃太空 -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      Isshow: false,
      tableData:[],
      form: {
        roleName: "",
        roleDesc: ""
      },
      rules: {
        roleName: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
        roleDesc: [{ required: true, message: "请输入角色描述", trigger: "blur" }]
      },
      emit_form:{
          id:"",
          roleName:"",
          roleDesc:""
      },
      Isemit:false
    };
  },

  mounted() {
    this.getlist();
  },
  methods: {
        getlist() {
      this.$axios.get("roles").then(res => {
        console.log(res);
        this.tableData = res.data;
      });
    },
    add() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.form = {
            roleName: this.form.roleName,
            roleDesc: this.form.roleDesc
          };
          this.$axios.post("roles", this.form).then(res => {
            console.log(res);
            this.$message.success(res.meta.msg);
            this.Isshow = false;
            this.getlist()
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  sc(id){
      console.log(id)
      this.$axios.delete(`roles/${id}`).then(res=>{
          console.log(res)
          this.$message.success(res.meta.msg)
          this.getlist()
      })
  },
  emit(row){
      console.log(row)
      this.emit_form={
          id:row.id,
          roleDesc:row.roleDesc,
          roleName:row.roleName
      }
      this.Isemit=true
  },
  emitlist(){
      this.$axios.put(`roles/${this.emit_form.id}`,this.emit_form).then(res=>{
          console.log(res)
          this.Isemit=false;
          this.$message.success(res.meta.msg)
          this.getlist()
      })
  }
  }
};
</script>

<style scoped >
</style>
