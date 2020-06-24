/**
BParams baseParams 固定参数，优先级最高
DParams defaultParams 默认参数，优先级最低
paramsInUrl 将参数的值拼接到接口url
paramsType 参数拼接方式 默认是 split(/),可选 base(&) 
authorization 是否携带凭证码
**/

let API = {
  Xiaoshou:{
    GetRegionSale: {
      url:'/getRegionSale',
      method:'post'
    },
  }
}


export default API


