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