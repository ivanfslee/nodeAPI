/*
We will be using postman as our front-end client to make requests to our API

What is HTTP?

    Hypertext Transfer Protocol
        
    Communication between web servers and clients
        In this course, our server will be running Node JS and Express
            Other backend languages (python/php/ASP.net etc)
        Our client will be postman and chrome web browser

    HTTP Requests/Responses - Request/Response Cycle
        Requests come from the client to the server.
        Sometimes client can send data to the server.

        And we do something with the request.
            e.g. update database, authenticate a user
                Then we send back a response and a status code

    Includes header & body
        In requests/responses there are headers and body

        Header - set of key:value pairs
            e.g. content-type: text/html
        
        Body - data from the server (response) 
            or form data to the server (request)


HTTP status codes:
    200 OK
    404 Not found
*/

const http = require('http'); //http comes with node, so we don't have to 'npm install' it

//http has a method called 'createServer()' that takes a function
    //the function takes a req object and res object
const server = http.createServer((req, res) => {
    
    //Using 'destructuring' JavaScript syntax to
        //pull out req.headers / req.url / req.method from req object
    const { headers, url, method } = req;

    console.log(headers, url, method);
    
    //res.end() will set status code as 200 (as long as there are no errors)
    res.end(); 
});

const PORT = 5000
server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));