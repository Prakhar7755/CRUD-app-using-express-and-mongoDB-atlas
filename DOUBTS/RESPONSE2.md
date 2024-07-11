In Express.js, the `res` object (short for response) represents the HTTP response that Express sends when it receives an HTTP request. It contains methods and properties that allow you to control what data is sent back to the client, such as setting headers, status codes, sending data, etc. Understanding the `res` object and its various methods and properties is essential for building effective server-side applications in Express.

### Properties of `res` object:

1. **res.send()**: Sends a response of various types (`string`, `Buffer`, `object`, `array`, etc.) back to the client. Automatically sets the appropriate `Content-Type` header based on the type of the response.

   Example:

   ```javascript
   app.get("/hello", (req, res) => {
     res.send("Hello, World!"); // Sends a string response
   });
   ```

2. **res.json()**: Sends a JSON response back to the client. Automatically sets the `Content-Type` header to `application/json`.

   Example:

   ```javascript
   app.get("/user", (req, res) => {
     res.json({ username: "john_doe", email: "john@example.com" }); // Sends a JSON response
   });
   ```

3. **res.status()**: Sets the HTTP status code of the response.

   Example:

   ```javascript
   app.get("/notfound", (req, res) => {
     res.status(404).send("Not Found"); // Sends a 404 status code with a message
   });
   ```

4. **res.setHeader() / res.set()**: Sets a response header with the given value.

   Example:

   ```javascript
   app.get("/customheader", (req, res) => {
     res.set("X-Custom-Header", "Hello"); // Sets a custom header
     res.send("Custom header set");
   });
   ```

5. **res.getHeaders()**: Returns an object containing the headers of the response.

   Example:

   ```javascript
   app.get("/headers", (req, res) => {
     res.set("X-Custom-Header", "Hello");
     const headers = res.getHeaders();
     console.log(headers); // Outputs all headers set on the response
     res.send("Headers sent");
   });
   ```

6. **res.cookie()**: Sets a cookie in the client's browser.

   Example:

   ```javascript
   app.get("/setcookie", (req, res) => {
     res.cookie("username", "john_doe", { maxAge: 900000, httpOnly: true });
     res.send("Cookie set");
   });
   ```

7. **res.clearCookie()**: Clears a cookie previously set.

   Example:

   ```javascript
   app.get("/clearcookie", (req, res) => {
     res.clearCookie("username");
     res.send("Cookie cleared");
   });
   ```

### Methods of `res` object:

1. **res.redirect()**: Redirects the client to a different URL.

   Example:

   ```javascript
   app.get("/old", (req, res) => {
     res.redirect("/new"); // Redirects to the /new route
   });
   ```

2. **res.sendFile()**: Sends a file to the client.

   Example:

   ```javascript
   app.get("/download", (req, res) => {
     res.sendFile("/path/to/file.pdf"); // Sends the specified file as response
   });
   ```

3. **res.download()**: Sends a file as an attachment, prompting the user to download it.

   Example:

   ```javascript
   app.get("/downloadpdf", (req, res) => {
     res.download("/path/to/file.pdf", "report.pdf"); // Downloads the file as 'report.pdf'
   });
   ```

4. **res.render()**: Renders a view template using the template engine configured in Express (like EJS, Pug, etc.).

   Example (using EJS):

   ```javascript
   app.get("/profile", (req, res) => {
     res.render("profile", { username: "john_doe" }); // Renders 'profile.ejs' with data
   });
   ```

5. **res.end()**: Ends the response process.

   Example:

   ```javascript
   app.get("/end", (req, res) => {
     res.end(); // Ends the response without sending any data
   });
   ```

6. **res.locals**: An object that contains response local variables scoped to the request. This is useful for passing data to templates rendered on the server.

   Example:

   ```javascript
   app.use((req, res, next) => {
     res.locals.user = req.user;
     next();
   });

   app.get("/dashboard", (req, res) => {
     res.render("dashboard", { title: "Dashboard" });
   });
   ```

### Example of using `res` object in Express:

```javascript
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello, World!"); // Sends a string response
});

app.get("/user", (req, res) => {
  res.json({ username: "john_doe", email: "john@example.com" }); // Sends a JSON response
});

app.get("/notfound", (req, res) => {
  res.status(404).send("Not Found"); // Sends a 404 status code with a message
});

app.get("/redirect", (req, res) => {
  res.redirect("/hello"); // Redirects to the /hello route
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

In this example:

- `res.send()`, `res.json()`, `res.status()`, `res.redirect()` are used to send various types of responses and manipulate HTTP status codes.
- `res.sendFile()` and `res.download()` are not used here but are useful for serving files to clients.
- `res.render()` is not used here but is essential when using a template engine like EJS or Pug.

These properties and methods of the `res` object allow you to effectively control the HTTP response sent back to clients in an Express application, enabling you to build dynamic and responsive web applications.
