<template>
    <div class="box">
<div class="top">
<span style="font-size:30px;font-weight:bold">←</span>
<span style="font-size:20px;font-weight:bold;">待处理签约申请</span>
<span></span>
</div>
<div class="five">
<el-card>
            <div class="name">
            <div>
              <span>王小明</span>
            <span style="margin-left:10px">58</span>
            <el-icon style="margin-left:10px"><bicycle /></el-icon>  
            </div>   
            <el-link type="danger">待审核</el-link>
            </div>
           <p class="aa">
<span>身份证号</span>
<span style="margin-left:10px">345022********0423</span>
           </p>
           <p class="aa">
<span>签约团队</span>
<span style="margin-left:10px">李明明团队</span>
           </p>
           <p class="aa">
<span>服务包</span>
<span style="margin-left:10px">老年人服务包</span>
           </p>
        </el-card>
<el-card>
            <div class="name">
            <div>
              <span>王小明</span>
            <span style="margin-left:10px">58</span>
            <el-icon style="margin-left:10px"><bicycle /></el-icon>  
            </div>   
            <el-link type="danger">待审核</el-link>
            </div>
           <p class="aa">
<span>身份证号</span>
<span style="margin-left:10px">345022********0423</span>
           </p>
           <p class="aa">
<span>签约团队</span>
<span style="margin-left:10px">李明明团队</span>
           </p>
           <p class="aa">
<span>服务包</span>
<span style="margin-left:10px">老年人服务包</span>
           </p>
        </el-card>
<el-card>
            <div class="name">
            <div>
              <span>王小明</span>
            <span style="margin-left:10px">58</span>
            <el-icon style="margin-left:10px"><bicycle /></el-icon>  
            </div>   
            <el-link type="danger">待审核</el-link>
            </div>
           <p class="aa">
<span>身份证号</span>
<span style="margin-left:10px">345022********0423</span>
           </p>
           <p class="aa">
<span>签约团队</span>
<span style="margin-left:10px">李明明团队</span>
           </p>
           <p class="aa">
<span>服务包</span>
<span style="margin-left:10px">老年人服务包</span>
           </p>
        </el-card>
</div>
<div class="bot">
    <span>没有更多了~~</span>
</div>
    </div>
</template>

<script>
import {Aim,Loading}  from "@element-plus/icons-vue"
export default {
components:{
Aim,Loading
},


    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped >
.box{
    width: 100%;
}
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.five {
  width: 100%;
}
.el-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
}
.name {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.aa {
  color: #999;
}
.bot{
    width: 100%;
    text-align: center;
    color: #DDD;
    margin-bottom: 100px;
}
</style>
