var ransomNumber = function(min,max){
  return Math.floor(Math.random()*(1 + max - min) + min);
};


module.exports = (ransomNumber(100,1000000)).toString();
