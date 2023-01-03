export let dataVal = 0;

function add() {
  dataVal = Math.max(dataVal, Math.floor(Math.random() * 1000))
}

function sub() {
  dataVal = Math.min(dataVal, Math.floor(Math.random() * 1000))
}

function getCurrentValue (){
  return dataVal;
}

export default {add, sub, getCurrentValue}