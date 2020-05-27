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

npm install -D nodemon
    -D stands for Development environment, as opposed to production

    We only want nodemon installed as a dependency for our development environment

    In your package.json - 'nodemon' will be listed under 'devDependencies' property

'npm start' vs 'nodemon <file name>'

    If you change the 'start' property in your 'scripts' property 
    in your package.json from:

        'start': 'node <file name>.js' 
    
    To:
        'start': 'nodemon <file name>.js'

    You can type 'npm start' to run your server.

    If you don't change the 'start' property,
        you can use:

        'nodemon <file name>.js' to run your server instead
    
    The above method basically modifies the 'start' script

*/

const http = require('http'); //http comes with node, so we don't have to 'npm install' it

const todos = [
    { id: 1, text: 'Todo One' },
    { id: 2, text: 'Todo Two' },
    { id: 3, text: 'Todo Three' }
]


//http has a method called 'createServer()' that takes a function
    //the function takes a req object and res object
const server = http.createServer((req, res) => {
    //We have to dictate what the content-type is being sent
        //So the browser can formulate an appropriate response
        //e.g.content-type: text/html, then browser renders the html

    //In this course, we won't be sending HTML or templates
        //Instead, our API will be responding with JSON
    // res.setHeader('Content-Type', 'application/json');

    //X-Powered-By is not a standard header
        //It specifies the technology supporting the web application
    // res.setHeader('X-Powered-By', 'Node.js');

    //setHeader() sets an individual header
    //writeHead() writes multiple headers and sets the status code as well

    //Set HTTP code using statusCode
        //res.statusCode = 404;

    //writeHead() instead of setHeader()
        //writeHead() takes a status code and an object of key:value pairs of headers
    res.writeHead(404, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js'
    });



    //You can have multiple res.write()'s
        // res.write('<h1>ALOHA</h1>');
        // res.write('<h2>ALOHA AGAIN</h2>');

    //If you are sending back one thing, you can put it in the res.end()

    //Using 'destructuring' JavaScript syntax to
        //pull out req.headers / req.url / req.method from req object
            //const headers = req.headers;
            //const url = req.url;
            //const method = req.method;
    const { headers, url, method } = req;
    console.log(headers, url, method);

    //res.end() will set status code as 200 (as long as there are no errors)
    //Note: JSON has double quotes around all the keys and values that are strings.
        //So we have to JSON.stringify whwatever we want to send as part of the response

    //Successful response:
        // res.statusCode = 200;
        // res.end(
        //     JSON.stringify({
        //         success: true,
        //         data: todos
        //     })
        // );

    //Unsuccessful response:
        res.end(
            JSON.stringify({
                success: false,
                error: 'Not Found',
                data: null
            })
        );
    //In any response, we have to send back a status code
        //and some data or an error message if data doesnt exist
        //or it was a bad request.
});

const PORT = 5000
server.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));