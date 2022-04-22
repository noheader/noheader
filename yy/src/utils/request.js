//1. 导入axios配置
import axios from "axios";


//创建axios的对象信息，配置信息
const Server = axios.create({
    baseURL:" https://www.liulongbin.top:8888/api/private/v1/",//基准地址
    timeout:5000,
});




//配置前置拦截器
Server.interceptors.request.use((config)=>{
    console.log('前置拦截器触发');
    //token值增加接口的header中区
    config.headers['Authorization'] = localStorage.getItem("token");
    return config;
},(error)=>{
    return Promise.reject(error);
})


//配置后置拦截器
Server.interceptors.response.use((response)=>{
    console.log("后置拦截器")
    return response.data;
},(error)=>{
    return Promise.reject(error);
})




//抛出对象的信息
export default Server;