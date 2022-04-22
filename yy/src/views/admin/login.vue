<template>
    <div class="box" ref="window">
<div class="wind">
<h1>电商后台管理系统</h1>
<el-form :model="form" :rules="rules"   ref="login" label-width="80px">
  <el-form-item prop="username">
    <el-input v-model="form.username" prefix-icon="el-icon-user"></el-input>
  </el-form-item>
  <el-form-item prop="password">
    <el-input  v-model="form.password" prefix-icon="el-icon-lock" >
    </el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button>重置</el-button>
  </el-form-item>
</el-form>
</div>
    </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules:{
          username:[
              {required: true, min: 5, max: 10, message: '您输入的字符必须在5-10个之间', trigger: 'blur' } 
          ],
          password:[
               { required: true,min: 5, max: 10, message: '您输入的密码必须在5-10个之间', trigger: 'blur' } 
          ]
              
          
      }
    };
  },

  mounted() {
    let html = document.documentElement || document.body;
    this.$refs.window.style.height = html.clientHeight + "px";
  },
  methods: {
      ...mapMutations(['addtoken']),
      login(){
          this.$refs["login"].validate((valid) => {
          if (valid) {
           this.$axios.post("login",this.form).then(res=>{
               console.log(res)
               if(res.meta.status==200){
                   alert(res.meta.msg)
                   console.log(res.data.token)
                  localStorage.setItem("token",res.data.token)
               this.$router.push("/admin/home")
               }else{
                    this.$message.error(res.meta.msg)
                    return false
               }
           })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  },
  computed:{
      ...mapState(['token'])
  }
};
</script>

<style scoped >
.box {
  width: 100%;
  background: #2b4b6b;
}
.wind {
  width: 30%;
  height: 300px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
