<template>
    <div class="box">
<el-container>
  <el-header>
      <span>公司Logo</span>
      <h1>电商后台管理</h1>
   <button>退出</button>
  </el-header>
  <el-container>
      <!-- 左侧 -->
      
    <el-aside :width="isCollapse?'65px':'200px'" >
        <header @click="isCollapse=!isCollapse">|||</header>
          <el-menu
      default-active="4"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
      >
      <el-submenu :index="index+'1'"   v-for="(item,index) in menus" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
<el-menu-item :index="ite.path" v-for="(ite,ind) in item.children" :key="ind">
        <i class="el-icon-menu" ></i>
        <span slot="title">{{ite.authName}}</span>
      </el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
    </div>
</template>

<script>
export default {
data() {
    return {
        menus:[],
        isCollapse:true
    }
},


    mounted() {
this.getlist()
    },
    methods: {
async getlist(){
    let res=await this.$axios.get('menus').then(res=>{
        console.log(res)
        this.menus=res.data
    })
}
    },
};
</script>

<style scoped >
.box{
    width: 100%;
}
header{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #505050;
    text-align: center;
}
.el-header{
    display: flex;
    justify-content: space-between;
    align-content: center;
    background: #808080;
}
.el-container{
    min-height: 450px;
}
</style>
