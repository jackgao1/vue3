import axios from 'axios';
import QS from 'qs'; 
import { Loading } from 'element-ui';

// // 环境的切换
// if (process.env.NODE_ENV == 'development') {    
//     // 开发环境
//     axios.defaults.baseURL = 'http://localhost:1235/';
// } else if (process.env.NODE_ENV == 'debug') {    
//     // debug调试环境
//     axios.defaults.baseURL = 'http://localhost:1235/';
// } else if (process.env.NODE_ENV == 'production') {    
//     // 生产环境
//     axios.defaults.baseURL = 'http://localhost:1235/';
// }

axios.defaults.baseURL = '/api'
// 设置请求超时
axios.defaults.timeout = 10000;
// post请求头的设置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // Loading.service({
    //     lock: true,
    //     text: 'Loading',
    //     spinner: 'el-icon-loading',
    //     background: 'rgba(0, 0, 0, 0.7)'
    //   });
    console.log('请求开始')
    return config;
  }, function (error) {
    // 对请求错误做些什么
    console.log('请求失败')
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('响应成功')
    return response;
  }, function (error) {
    // 对响应错误做点什么
    console.log('响应失败')
    return Promise.reject(error);
  });
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {    
    return new Promise((resolve, reject) => {         
        axios.post(url, QS.stringify(params))        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}