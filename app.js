var http = require('http');
var thirdmodule = require('./thirdmodule.js');


http.createServer(function(req, res){
  res.writeHead(200);
  res.write(thirdmodule.usDollars + thirdmodule.ransomNumber.toString());
  res.end();
}).listen(8001);


//node app.js
//curl localhost:8000
