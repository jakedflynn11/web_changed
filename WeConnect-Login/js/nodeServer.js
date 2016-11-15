var http = require('http');


http.createServer(function(request, response) {

    response.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    var headers = request.headers;
    var method = request.method;
    var url = request.url;
    var bodyarray = [];
    var body = [];



    request.on('error', function(err) {
        console.log("testing node...");
        console.error(err);
    }).on('data', function(data) {
        console.log("testing node...");

        //lets see what data we got...
        conosle.log(data);

    });


}).listen(5000);