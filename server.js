const http = require("http");
const fs = require('fs');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer(function(request, response) {
    if (request.url === '/') {
        let filePath = path.join(__dirname, 'public', 'Homepage.html')
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                response.write(error)
                response.end('something went wrong')
            } else {
                response.end(data);
            }
        })
    }

    if (request.url === '/contacts.html') {
        let filePath = path.join(__dirname, 'public', 'contacts.html')
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                response.write(error)
                response.end('something went wrong')
            } else {
                response.end(data);
            }
        })
    }

    if (request.url === '/AboutMe.html') {
        let filePath = path.join(__dirname, 'public', 'AboutMe.html')
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                response.write(error)
                response.end('something went wrong')
            } else {
                response.end(data);
            }
        })
    }
    
     if (request.url === '/Homepage.html') {
        let filePath = path.join(__dirname, 'public', 'Homepage.html')
        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                response.write(error)
                response.end('something went wrong')
            } else {
                response.end(data);
            }
        })
    }
});


server.listen(port, hostname, function(error) {
    if (error) {
        console.log('something went wrong', error);
    } else {
        console.log(`server is running at http://${hostname}:${port}/`);
    }
});
