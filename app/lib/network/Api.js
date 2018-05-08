import axios from 'axios';
import baseConfig from './HttpBaseConfig';
const BASE = baseConfig.baseUrl + ':' + baseConfig.port + baseConfig.prefix;
import Header from './HttpBaseConfig'
export default {
   name:'Api',
   api:(api)=>{
     console.log("begin fetch:"+BASE+api.api,api.data);
     axios.post(BASE+api.api,api.data,{headers:Header})
     .then((res)=>{
       console.log("response:",res);
       let flag=res.data.flag;
       let result=res.data.result;
       if(flag==0){
         //成功
         api.success && api.success(result);
       }else if(flag<0){
         //弹出对话框
         api.message&&api.message(result);
       }else if(flag==7){
       }else{

       }
     })
     .catch((err)=>{
       console.log("网络错误")
     });
   },
 }
