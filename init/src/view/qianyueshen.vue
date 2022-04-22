<template>
    <div class="box">
<div class="top">
<span style="font-size:30px;font-weight:bold">←</span>
<span style="font-size:20px;font-weight:bold;">待处理签约申请</span>
<span style="color:green">查看协议</span>
</div>
<div class="tiao">
<el-icon><alarm-clock /></el-icon>
<span>等待医生审核中</span>
</div>
<h4>居民信息</h4>
<el-card>
     <p class="aa">
<span>姓名</span>
<span style="margin-left:10px">王安然</span>
           </p>
           <p class="aa">
<span>身份证号</span>
<span style="margin-left:10px">1430524256213585</span>
           </p>
           <p class="aa">
<span>性别</span>
<span style="margin-left:10px">女</span>
           </p>
           <p class="aa">
<span>年龄</span>
<span style="margin-left:10px">26</span>
           </p>
           <p class="aa">
<span>联系电话</span>
<span style="margin-left:10px"> 15678909900</span>
           </p>
           <p class="aa">
<span>现居地</span>
<span style="margin-left:10px">  怀柔区洛西县建设路青莲小区6-601</span>
           </p>
        </el-card>
        <h4>签约信息</h4>
        <el-card>
            <p class="aa">
<span>签约状态</span>
<span style="margin-left:10px;color:green">待审核</span>
           </p>
           <p class="aa">
<span>服务包</span>
<span style="margin-left:10px">老年人服务包</span>
           </p>
           <p class="aa">
<span>签约机构</span>
<span style="margin-left:10px">洛西社区卫生服务站</span>
           </p>
           <p class="aa">
<span>签约团队</span>
<span style="margin-left:10px">李明明团队</span>
           </p>
           <p class="aa">
<span>签约医生</span>
<span style="margin-left:10px">李明明</span>
           </p>
           <p class="aa">
<span>服务包</span>
<span style="margin-left:10px">老人服务包</span>
           </p>
           <p class="aa">
<span>签约周期</span>
<span style="margin-left:10px">1年</span>
           </p>
           <p class="aa">
<span>生效日期</span>
<span style="margin-left:10px">2020/10/09</span>
           </p>
           <p class="aa">
<span>费用</span>
<span style="margin-left:10px;color:orange">¥120</span>
           </p>
           <p class="aa">
<span>申请时间</span>
<span style="margin-left:10px;">2020/10/09 10:09:09</span>
           </p>
           <p class="aa">
<span>签约备注</span>
           </p>
        </el-card>
    </div>
</template>

<script>
import {AlarmClock} from "@element-plus/icons-vue";
export default {

components:{
    AlarmClock
}
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
.tiao{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background: yellow;
    color: #999;
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
</style>
