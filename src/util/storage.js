/*
    storage 主要放项目中的storage相关操作：存取等
*/

function set(key, value){
  if(value===false || value===null){remove(key);}
  var data = {
    value: value,
    time: Date.now()
  };
  localStorage[key] = JSON.stringify(data);
}
//{key: data, key2: data}
function setAll(data){

}

function get(key){
  var data = localStorage[key];
  if (!data || data === "null") {
      return null;
  }
  return JSON.parse(data).value;
}

function getAll(){

}

function remove(key){
  localStorage.removeItem(key);
}

function clear(){
  localStorage.clear();
}

function has(key){

}

export default {
  set,
  setAll,
  get,
  getAll,
  remove,
  clear,
  has
};