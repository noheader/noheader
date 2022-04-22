<template>
    <div class="box">
<div class="top">
<span style="font-size:30px;font-weight:bold">←</span>
<span style="font-size:20px;font-weight:bold;">选择家庭成员</span>
<span></span>
</div>
<h4>签约信息</h4>
<div class="conent">
<span style="color:#999">签约机构</span>
<span>洛西卫生服务站</span>
<span style="color:#999">></span>
</div>
<div class="conent">
<span style="color:#999">签约团队</span>
<span>李明明团队</span>
<span style="color:#999">></span>
</div>
<div class="conent">
<span style="color:#999">签约医生</span>
<span>李明明</span>
<span style="color:#999"></span>
</div>
<div class="conent">
<span style="color:#999">服务包</span>
<span>老人服务包</span>
<span style="color:#999">></span>
</div>
<div class="conent">
<span style="color:#999">签约周期</span>
<span>1年</span>
<span style="color:#999"></span>
</div>
<div class="conent">
<span style="color:#999">生效日期</span>
<span>2020年09月01日</span>
<span style="color:#999">></span>
</div>
<div class="conent">
<span style="color:#999">费用</span>
<span style="color:orange">￥120</span>
<span style="color:#999">></span>
</div>
<div class="CC">
<span style="color:#999">备份</span>
<span>
    <textarea name="" id="DD" cols="23" rows="5">请填写备注</textarea>
</span>
</div>
<div class="butt">
<el-button type="success" size="large" style="width:100%;">提交</el-button>
</div>
    </div>
</template>

<script>
export default {



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
    height: 50px;
    display: flex;
    justify-content: space-between;
}
.conent{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    margin-bottom:5px;
    background: #FFF;
}
.CC{
    width: 100%;
    /* height: 50px; */
      display: flex;
    justify-content: space-between;
    align-items: center;
     border-bottom: 1px solid #ddd;
}
#DD{
    background: #DDD;
    color: #999;
}
/* .butt{
    width: 100%;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    transform: translate(-50%,-50%);
} */
</style>
