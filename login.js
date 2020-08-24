var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버 생성
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    // fs.readFile(_url)
    // if(_url == '/favicon.ico'){
    //   return response.writeHead(404);
    // }
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.end("hello world\n");
 
});
app.listen(3000);

console.log("server running!")