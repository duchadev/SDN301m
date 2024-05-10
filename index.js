const express = require('express')
const morgan = require('morgan')
const http = require('http')
const hostname ='localhost'
const port = 3000
const app = express();
app.use(morgan('dev'))
app.use(express.static(__dirname+'/public'))
app.use((req,res,next)=> {
    // console.log(req.headers);
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')

})



const sever = http.createServer(app)
sever.listen(port,hostname,()=>
{
    console.log(`Sever running at http://${hostname}:${port}/`);
})