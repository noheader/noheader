<template>
    <div>
<van-nav-bar
  title="关联家人信息"
  right-text="完成"
  left-arrow
/>
<p style="color:#aaa;font-size:14px">家人信息</p>
<div class="famly">
<span style="margin-left:5px">选择家人</span>
<span style="color:#999">请选择该居民家人信息</span>
<span style="margin-right:5px;color:#d1d1d1">></span>
</div>
<div class="famly">
<span style="margin-left:5px">与本人关系</span>
<span style="color:#999">请选择家人与该居民关系</span>
<span style="margin-right:5px;color:#d1d1d1">></span>
</div>
<el-link type="success" class="su">+新增关联家人</el-link>
    </div>
</template>

<script>
export default {



    
};
</script>

<style scoped >
.famly{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    border-bottom: 1px solid #ddd;
}
.su{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
</style>
