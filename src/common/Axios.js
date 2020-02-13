import axios from 'axios';
// import { message } from 'antd';
import qs from 'qs';
function getCookie(name) {
    if(!document.cookie) {
        return null;
    }
    const csrfCookies = document.cookie.split(';')
        .map(c => c.trim())
        .filter(c => c.startsWith(name + '='));
    if(csrfCookies.length === 0) {
        return null;
    }
    //对encodeURIComponent()函数编码的URI进行解码
    return decodeURIComponent(csrfCookies[0].split('=')[1]);
}
const instance = axios.create({
    //当创建实例的时候，配置默认配置
    timeout:100000
});
//添加请求拦截器
instance.interceptors.request.use(config => {
    if(config.method === "get") {
        config.paramsSerializer=params => {
            return qs.stringify(params, { indices:false })
        }
    }
    if(config.method === "post") {
        if(config.body instanceof FormData) {
            config.headers = {
                'X-CSRFToken': getCookie('csrftoken')
            }
        }else {
            config.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            }
        }
    }
    if(config.method === "put") {
        if(config.body instanceof FormData) {
            config.headers = {
                'X-CSRFToken': getCookie('csrftoken')
            }
        }else {
            config.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            }
        }
    }
    if(config.method === "patch") {
        config.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        }
    }
    if(config.method === 'delete') {
        config.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        }
        config.paramsSerializer = params => {
            return qs.stringify(params, { indices: false })
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

//添加一个响应拦截器
instance.interceptors.response.use(response => {
    return Promise.resolve(response.data);
}, (error) => {
    if(error.response.status === 403) {
        //403处理
    }
    return Promise.reject(error.response.data);
});

export default instance;