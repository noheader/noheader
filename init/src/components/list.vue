<template>
    <div>
<ul>
    <li v-for="(item,index) in  list" :key="index">{{item.name}}--{{item.age}}--{{item.love}}</li>
</ul>
    </div>
</template>

<script>
export default {

props:['list'],
setup(props) {
    console.log(props)
}
    
};
</script>

<style scoped >

</style>
