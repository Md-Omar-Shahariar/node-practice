const http = require("http");
const fs = require("fs")

const server = http.createServer((req, res) => {
  const url = req.url;

  const method = req.method

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input name='message' type='text'/><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if(url === '/message' && method == 'POST'){
    res.statusCode = 302
    fs.writeFileSync("message.txt","Dummy Text")
    res.setHeader('Location','/')
    return res.end()
  }
  // process.exit()
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>NodeJs</title></head>");
  res.write("<body><h1>Hi There This Is node</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
