// create a server through nodejs

// importing a module
const http = require('http'); // with this method you can also import a js file
          
// request listener, the createServer argument
function rqListener(req, res){
    // this function takes 2 arguments, 
    // 1st argument represent the incoming request
    // 2nd argument represent the response that can be returned
    console.log(req);
}

// create server
const server = http.createServer(rqListener) // the argument of this method is a function that will be executed
                                            // for every incoming request

server.listen(3000); // 1st argument is the port 