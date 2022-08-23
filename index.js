// import { URL } from 'node:url';
// const axios = require('axios');

const http = require ('http');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.statusCode = 200;
    console.log("req url = " + req.url);
    console.log("res method " + res.method);

    if(req.url === "/"){
        fs.readFile('index.html',function(err,data){
            if (err) 
            {throw err;}
            
            // res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    if(req.url === "/about.html"){
        fs.readFile('about.html',  (err, data) => {
        if(err)
        {throw err;}

        res.write(data);
        res.end();
        });
    }
    if(req.url === "/contact-me.html"){
        fs.readFile("contact-me.html", (err, data) => {
            if(err)
                throw err;

            res.write(data);
            res.end();
        })
    }
    else{
        fs.readFile("404.html", (err, data) => {
            if(err)
                throw err;

            res.write(data);
            res.end();
        })
    }


})

// if(req.url==='/'){
//     fs.readFile('index.html',function(err,data){
//         if (err) throw err;
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end;
//     });
// }
  
server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

// localhost:8080 should take users to index.html
// localhost:8080/about should take users to about.html
// localhost:8080/contact-me should take users to contact-me.html
// 404.html should display any time the user tries to go to a page not listed above.