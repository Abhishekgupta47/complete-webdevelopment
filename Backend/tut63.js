const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World this is abhishek gupta');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selector & more designing</title>
      <style>
          .container {
              border: 2px solid rgb(75, 93, 3);
              background-color: rgb(212, 207, 131);
              padding: 34px;
              margin: 34px auto;
              width: 666px;
          }
  
          a{
              text-decoration: none;
              color:black;
          }
          
          /** pseudo selector */
          a:hover {
               color: rgb(5, 0, 0);
              background-color: rgb(221, 166, 38);
          }
          a:visited {
              background-color: yellow;
          }
  
          a:active {
              background-color: darkblue;
          }
  
          .btn {
              background: yellow;
              padding: 6px;
              border: none;
              font-size: 15px;
              border-radius: 14px;
  
  
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h3>This is my heading</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat veniam excepturi cupiditate, ipsa dolores,
              consequatur deleniti hic ab ducimus expedita perspiciatis officia reprehenderit debitis illum culpa soluta
              labore enim at.</p>
          <a href="https://google.com" class="btn">Read more</a>
          <button class="btn">Contact us</button>
  
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});