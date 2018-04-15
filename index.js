function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thissValue, arg) {
  return fn().cal(thisValue, args)
}
