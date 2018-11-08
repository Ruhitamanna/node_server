var http = require('http');
var fs=require('fs');
  var server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    fs.readFile('index.html',function(err,data){
      if(err){
      return console.log("File read error")
      }
    res.end(data);
    })
  });
  server.listen(process.env.PORT||3000, process.env.IP, function(){
    console.log('Server running');
  });