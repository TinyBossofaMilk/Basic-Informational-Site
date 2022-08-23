import { URL } from 'node:url';

const http = require ('http');
const axios = require('axios');

const port = proces.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
})
  
server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})


// localhost:8080 should take users to index.html
// localhost:8080/about should take users to about.html
// localhost:8080/contact-me should take users to contact-me.html
// 404.html should display any time the user tries to go to a page not listed above.