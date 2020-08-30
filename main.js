var http = require('http');
var url = require('url');
// var topic = require('./lib/topic');
// var author = require('./lib/author');
var mysql = require('mysql');
var db = mysql.createConnection(
    {
        host     : 'localhost',
        user     : 'root',
        password : '111111',
        database : 'test'
    }
);
db.connect();

var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if (pathname === '/')
    {
        if (queryData.id === undefined)
        {
            db.query('SELECT * FROM user', function (error, users) {
                var title = 'Welcome';
                var description = 'Hello, Node.js';
                var list = template.list(users);
                var html = template.HTML(title, list,
                    `<h2>${title}</h2>${description}`,
                    `<a href="/create">create</a>`
                );
                response.writeHead(200);
                response.end(html);
                });
        }
    }
    // else
    // {
    //     db.query('SELECT * FROM user', function(error, users){
    //         if(error)
    //             throw error;
    //         db.query('SELECT * FROM users WHERE id=?', [queryData.id], function(error2, user){
    //             if (error2)
    //                 throw error2;
                
    //         })
    //     })
    // }
});
app.listen(3000);