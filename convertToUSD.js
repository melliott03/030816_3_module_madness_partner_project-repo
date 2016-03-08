var usDollars = function(number){
  // var x = parseInt(number);
  return "$" + number.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

module.exports = usDollars;
