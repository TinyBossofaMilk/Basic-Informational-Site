// import { URL } from 'node:url';
// const axios = require('axios');

const http = require ('http');
const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 8000;


// app.get('/', function(req, res) {
//   res.send('Hello World!')
// });


app.get('/', function (req, res) {
    fs.readFile('index.html',function(err,data){
        if (err) 
        {throw err;}
        res.write(data);
        res.end();
    });
})

app.get('/about.html', function (req, res){
    fs.readFile('about.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    });
});

app.get('/contact-me.html', (err, res) => {
    fs.readFile("contact-me.html", (err, data) => {
        if(err)
            throw err;
        res.write(data);
        res.end();
    })
})



app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

// const server = http.createServer((req, res) => {
//     res.writeHead(200,{'Content-Type':'text/html'});
//     console.log("req url = " + req.url);
//     console.log("res method " + res.method);

//     if(req.url === "/"){
//         fs.readFile('index.html',function(err,data){
//             if (err) 
//             {throw err;}
//             res.write(data);
//             res.end();
//         });
//     }
//     if(req.url === "/about.html"){
//         fs.readFile('about.html',  (err, data) => {
//         if(err)
//         {throw err;}
//         res.write(data);
//         res.end();
//         });
//     }
//     if(req.url === "/contact-me.html"){
//         fs.readFile("contact-me.html", (err, data) => {
//             if(err)
//                 throw err;

//             res.write(data);
//             res.end();
//         })
//     }
//     else{
//         fs.readFile("404.html", (err, data) => {
//             if(err)
//                 throw err;

//             res.write(data);
//             res.end();
//         })
//     }


// })
  
// server.listen(port, () => {
//     console.log(`Server running at port ${port}`)
// })