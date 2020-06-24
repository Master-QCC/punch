/**
 * 配置文件
 * 
 */

let RouterConf = {
  linkActiveClass : 'active',
  mode : 'history',
  history: true,
  base : '/'
};

let ApiConf = {
  base : 'http://10.202.6.77:8080',
  //base : 'http://172.17.202.201:8080',
  //base : 'http://10.202.6.229:8080',
  url : '/big_screen_all',
  //base : 'http://daping.api',
  //url : '/',
  timeout : 10000,
};

let WebsiteConf = {
	webname : '大屏展示',
	weburl : 'http://localhost:8080/',
  copyright : 'Copyright © 2018'
};

let BaseConf = {
  flashStep : 0,
  swiperStep : 5000,
  //开启地图里面的门店坐标点
  openMapShop : true
};

//开发环境
if(process.env.NODE_ENV == 'development') {
  
}

//生产环境
if(process.env.NODE_ENV == 'production'){
  
}

//测试环境
if(process.env.NODE_ENV === 'testing'){

}

export {
  RouterConf,
  ApiConf,
  ImgConf,
  WebsiteConf,
  BaseConf
}