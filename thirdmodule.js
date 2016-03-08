var ransomNumber = require('./returnRansomNumber.js');
var usDollars = require('./convertToUSD.js');


var convertRansom = usDollars(ransomNumber);
// var convertRansom = function(){
  // return usDollars(ransomNumber(100,1000000));
// };

var accountBalance = "account balance: \n";

module.exports.ransomNumber = convertRansom;
module.exports.usDollars = accountBalance;
