<template>
    <div class="box">
<div class="top">
<span style="font-size:30px;font-weight:bold">←</span>
<span style="font-size:20px;font-weight:bold;">选择家庭成员</span>
<span></span>
</div>
<div class="modal">
<el-icon :size="30" color="green"><circle-check-filled /></el-icon>
<h2 style="font-size:20px">提交成功,等待居民确认</h2>
<span style="font-size:13px;color:#999">
签约信息已提交，居民支付后可完成签约</span>
</div>
<div class="bott">
<el-button type="success" style="width:200px">查看签约进度</el-button>
<el-button style="width:200px">返回首页</el-button>
</div>
    </div>
</template>

<script>
import {CircleCheckFilled} from "@element-plus/icons-vue";
export default {

components:{
    CircleCheckFilled
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
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
   margin-bottom: 30px;
}
.modal{
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.bott{
    width: 100%;
    height: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.el-button +.el-button {
    margin-left: 0px;
    margin: 10px 0px;
}
</style>
