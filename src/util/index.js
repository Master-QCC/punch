import storage from './storage'

export default{
  install(Vue,options){
    //页面跳转
    Vue.prototype.pageTurn = function(url,flash = true){
      if(flash){
        window.location = url;
      }else{
        this.$router.push({path:url});
      }
    }

    //返回上一页
    Vue.prototype.backPage = function(){
      this.$router.go(-1)
    }

    //生成LinkItem跳转URL
    Vue.prototype.getLinkItemUrl = function(d){
    	//console.log('getLinkItemUrl');
    }

    //数字格式化
    Vue.prototype.setNumber = function(s, n) {
      let isFu = '';
      if(parseFloat(s+ "")<0){
        isFu = '-';
        s = parseFloat(s+ "")*-1;
      }
      if (n == 0) {
          s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";
          var l = s.split(".")[0].split("").reverse(),
              t = "";
          for (let i = 0; i < l.length; i++) {
              t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
          }
          return isFu+t.split("").reverse().join("");
      }
      n = n > 0 && n <= 20 ? n : 2;
      s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
      var l = s.split(".")[0].split("").reverse(),
          r = s.split(".")[1];
      t = "";
      for (let i = 0; i < l.length; i++) {
          t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
      }
      return isFu+t.split("").reverse().join("") + "." + r;
    }

    //数字过渡
    Vue.prototype.setNumberFlash = function(now,old,obj,key){
      let step = 40;
      let time = 800;
      let valueStep = (now-old)/step;

      for(let i=1;i<=step;i++){
        setTimeout(function(){
          obj[key] += valueStep;
        },time*i/step);
      }
    }

    //属性转化成flashClassName
    Vue.prototype.getFlashClassName = function(obj){
      let arr = new Array();
      if(obj.transparent){
        arr.push('flash-transparent');
      }
      if(obj.moveLeft){
        arr.push('flash-move-left');
      }
      return arr.join(' ');
    }

    Vue.prototype.isOverTmall11 = function(data){
      if(data.year>2018){
        return true;
      }else if(data.year==2018){
        if(data.month>11){
          return true;
        }else if(data.month==11){
          if(data.day>=12){
            return true;
          }
        }
      }
    }

    //判断是否登陆
    Vue.isLogined = function(){
      return true;
      if(storage.get('token')){
        return true;
      }
      return false;
    }

  }
}

