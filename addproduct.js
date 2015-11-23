var http = require('http');



http.get("http://localhost:3000/products", function(res) {
      console.log("Got response: " + res.statusCode);

      res.on("data", function(data){
        addSubject(data);
      });
}).on('error', function(e) {
      console.log("Got error: " + e.message);
});

function addSubject(d){
    var options = {
        hostname: 'localhost',
        port: 3000,
        path: '/products/addproduct',
        method: 'POST',
        headers: {"Content-Type": "application/json"}
    };
    var subjects = JSON.parse(d.toString()).result;

    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

//write data to request body
    data = {};
    data.name= 'moto';
    data.price= 1000;
    data.quantity=10;

    req.write(JSON.stringify(data));
    req.end();

}