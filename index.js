function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}
