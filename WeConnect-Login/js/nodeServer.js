var http = require('http');
console.log("server started");

http.createServer(function(request, response) {

    response.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    var headers = request.headers;
    var method = request.method;
    var url = request.url;
    var bodyarray = [];
    var body = [];


    var qs = require('querystring');
    request.on('error', function(err) {
        console.log("testing node err...");
        console.error(err);
    }).on('data', function(data) {
        console.log("testing node data...");
        bodyarray.push(data);
        body += data;

        var post = qs.parse(body);


        //lets see what data we got...
        console.log(post);
        console.log(post.email);

        //getting info correctly at this point. ready for api call

    });


}).listen(7000);