var http = require('http');
var fs = require('fs');


//create a server object:
http.createServer(function (req, response) {
  // send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-type': 'text/html', 'text/css'});
  //write a response to the client
  fs.readFile('index.html','StyleSheet.css' ,null,function(error,data){
    if(error){
      response.writeHead(404);
      response.write('file not found');
    }
      else{
        response.write(data);
      }
  
      response.end();
    })
}).listen(80); //the server object listens on port 80
