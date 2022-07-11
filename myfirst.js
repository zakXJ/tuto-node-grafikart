/* var http = require('http')
let url = require('url')

var server = http.createServer()

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! TEST');
}).listen(8080); 

server.on('request', (req, res)=>{


  if(url.parse(req.url,true).pathname=='/'){
    let query = url.parse(req.url,true).query
    res.writeHead(200)
    console.log(url.parse(req.url,true)) 
    res.end('BONJOUR '+query.name)
    console.log('1')
  }


let queryname
    res.writeHead(200)
  let query = url.parse(req.url,true).query
  if(query.name!=undefined){
    queryname=query.name
    console.log('query.name!=undefined')
  }
  console.log(queryname)
  console.log(url.parse(req.url,true).query.name)  
  console.log('1')
    res.end('BONJOUR')
    console.log('2') 

}
)

server.listen(8080) */

let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/demo', (req, res) => {
  res.send('Hello World! DEMO')
})

app.listen(8080)

