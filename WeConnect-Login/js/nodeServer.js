var http = require('http');
console.log("server started");

http.createServer(function(request, response) {

    response.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    var headers = request.headers;
    var method = request.method;
    var url = request.url;
    var bodyarray = [];
    var body = [];



    request.on('error', function(err) {
        console.log("testing node err...");
        console.error(err);
    }).on('data', function(data) {
        console.log("testing node data...");

        //lets see what data we got...
        console.log(data);

    });


}).listen(7000);