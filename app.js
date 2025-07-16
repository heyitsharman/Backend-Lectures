let http = require('http');  

function handelrequest(request, response){

    if(request.url=== '/currentTime') {
        response.statusCode = 200;
        response.end('<h1>'+ new Date().toISOString + '</h1>');
    }
    else if(request.url == '/'){
        response.statusCode = 200;
        response.end('<h1>Welcome Page</h1>');
    }
   
}
const server = http.createServer(handelrequest);  //create server

server.listen(3000);  //listen on port number to incoming request on port 3000
