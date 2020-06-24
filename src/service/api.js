import axios from 'axios' // 处理http请求
import {ApiConf} from '../config'
import storage from '../util/storage'
import API from './api_config'

axios.defaults.baseURL = ApiConf.base + ApiConf.url;
axios.defaults.timeout = ApiConf.timeout;

function Query(apiType, Params = {}, Conf = {}){
  let api = getApiObj(apiType);
  let token = storage.get('token');
  let params = Object.assign(api.DParams || {},Params,api.BParams || {});
  let AXIOS;

  if(Conf.that && Conf.loadTag && Conf.that[Conf.loadTag]){
    showErrorMsg('接口加载中，请勿重复请求','warning');
    return;
  }

  let axiosConf = {
    url:api.url,
    method:api.method,
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
      'accessToken' : 'f714e078bb4511e8abf28ac640ecdf9c'
    },
    //withCredentials: true
  };

  if(Conf.urlAdd){
    axiosConf.url += '/'+Conf.urlAdd;
  }

  if(api.authorization!==false){
    //axiosConf.headers.Authorization = token;
  }

  if(api.paramsInUrl && Params){
    if(api.paramsType=='base'){
      axiosConf.params = params;
    }else{
      for(let i in Params){
        axiosConf.url += '/'+Params[i];
      }
      axiosConf.params = {};
    }
  }

  if(api.method == 'post'){
    axiosConf.data = params;
    //将post请求数据转为formdata
    axiosConf.transformRequest = [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }];
  }

  if(api.method == 'get'){
    axiosConf.params = params;
  }

  AXIOS = axios.create(axiosConf);

  // 添加请求拦截器
  AXIOS.interceptors.request.use(function (config) {
    // 处理请求数据

    if(Conf.that && Conf.loadTag){//设置loadTag为正在加载状态
      Conf.that[Conf.loadTag] = true;
    }

    return config;
  }, function (error) {
    // 处理请求错误

    return Promise.reject(error);
  });

  // 添加响应拦截器
  AXIOS.interceptors.response.use(function (response) {
    // 处理响应数据 {config,data,headers,request,status,statusText}

    if(Conf.that && Conf.loadTag){//设置loadTag为加载完毕状态
      Conf.that[Conf.loadTag] = false;
    }
    response.res = response.data;
    return response;
  }, function (error) {
    // 处理响应错误 {config,response,message,request}

    if(Conf.that && Conf.loadTag){//设置loadTag为加载完毕状态
      Conf.that[Conf.loadTag] = false;
    }

    showErrorMsg('网络异常');

    return Promise.reject(error);
  });

  return AXIOS.request();
}

function getApiObj(type){
  /*let apiObj = API;
  type.split('.').map(function(v){
    apiObj = apiObj[v];
  });*/

  let apiObj = {
    url:'/'+type,
    method:'post'
  };

  return apiObj;
}

function showErrorMsg(string,type="error"){
  console.log(string);
}

export default {
  query: Query
}


