function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, args) {
  return fn().cal(thisValue, args)
}
