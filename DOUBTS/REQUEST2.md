In Express.js, the `req` object (short for request) represents the HTTP request that is sent from the client to the server. It contains information about the request, such as the URL, HTTP headers, query parameters, body (for POST requests), etc. Understanding the `req` object and its various methods and properties is fundamental for handling incoming requests in an Express application.

### Properties of `req` object:

1. **req.params**: This property holds route parameters in the path of the URL.
   
   Example:
   ```javascript
   // Route definition: GET /users/:userId
   app.get('/users/:userId', (req, res) => {
     console.log(req.params.userId); // Access the userId parameter
   });
   ```

2. **req.query**: Contains an object with properties mapped to the query string parameters.
   
   Example:
   If the URL is `/search?query=express&limit=10`:
   ```javascript
   console.log(req.query.query); // Outputs 'express'
   console.log(req.query.limit); // Outputs '10'
   ```

3. **req.body**: Contains key-value pairs of data submitted in the request body. This is populated by middleware such as `body-parser` or `express.json()`.

   Example (assuming JSON payload):
   ```javascript
   // POST /api/users with JSON body { "username": "john_doe" }
   app.post('/api/users', (req, res) => {
     console.log(req.body.username); // Outputs 'john_doe'
   });
   ```

4. **req.headers**: An object containing the HTTP headers sent by the client.

   Example:
   ```javascript
   console.log(req.headers['content-type']); // Outputs the content type header
   ```

5. **req.url**: The URL string of the request.

   Example:
   ```javascript
   console.log(req.url); // Outputs the URL of the request
   ```

6. **req.method**: The HTTP method of the request (GET, POST, PUT, DELETE, etc.).

   Example:
   ```javascript
   console.log(req.method); // Outputs the HTTP method of the request
   ```

7. **req.ip**: The IP address of the client making the request.

   Example:
   ```javascript
   console.log(req.ip); // Outputs the IP address of the client
   ```

### Methods of `req` object:

1. **req.get(headerName)**: Retrieves the value of the specified header.

   Example:
   ```javascript
   console.log(req.get('content-type')); // Retrieves the value of the content-type header
   ```

2. **req.param(name)**: Retrieves the value of a route parameter.

   Example:
   ```javascript
   // Route definition: GET /users/:userId
   app.get('/users/:userId', (req, res) => {
     console.log(req.param('userId')); // Retrieves the value of the userId parameter
   });
   ```

3. **req.is(type)**: Checks if the incoming request's `Content-Type` header matches the specified MIME type.

   Example:
   ```javascript
   if (req.is('json')) {
     // Handle JSON request
   }
   ```

4. **req.accepts(types)**: Checks if the incoming request accepts a certain MIME type.

   Example:
   ```javascript
   if (req.accepts('html')) {
     // Respond with HTML
   }
   ```

5. **req.cookies**: An object containing cookies sent by the client.

   Example:
   ```javascript
   console.log(req.cookies); // Outputs the cookies sent by the client
   ```

6. **req.protocol**: The protocol (http or https) of the request.

   Example:
   ```javascript
   console.log(req.protocol); // Outputs 'http' or 'https'
   ```

### Example of handling a request in Express:

```javascript
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/api/users', (req, res) => {
  const { username, email } = req.body;
  // Process the username and email
  res.status(200).send('User created successfully');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

In this example:
- `req.body` is used to retrieve data submitted in the request body (`username` and `email`).
- `req.params` and `req.query` are not used here but could be in other routes to handle route parameters and query strings.

Understanding and effectively using these properties and methods of the `req` object is crucial for building robust and functional APIs with Express.js.