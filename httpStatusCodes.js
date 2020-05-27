/*HTTP Status Codes

HTTP codes go from 100s to 500s

1.xx Informational
    In building REST API's, these codes are seldom used.
    These 100s codes are fired off 
    before the response is fulfilled.

2.xx Success
    200 Success
    201 Created 
    204 No Content

201 Created - 
    If you put something in a databse, you
        would return a 201 to indicate
        it was successful and something
        was created.
    You could also use a 200

204 No Content
    If you make a delete request.
    You delete something off the server.
    If it is successful, you return a 204.

3.xx Redirection
    304 Not Modified

300s - 301 is a redirect
304 - Not Modified
    E.g. You make a GET request and then 
        you make another one but nothing 
        has changed at all on the server.
        That is, the response is the same.
        You may get a 304.

4.xx Client Error
    400 Bad Request
    401 Unauthorized
    404 Not found

400s - Something went wrong, but it is 
    the client's fault.

    400 - bad request.
        E.g. you submitted a form for 
            registration and an email
            was required, but you didn't
            include an email. 
            You would get back a 400.

            Form validation errors typically
            return 400 status code.

    401 - Unauthorized
        You don't have the authorization to get 
        a piece of data, for example.

    404 - Not found - some data, page, doesnt exist.
        You are looking for something that is not there.

5.xx Server Error
    500 Internal Server Error

500s - something goes wrong on the server.

*/