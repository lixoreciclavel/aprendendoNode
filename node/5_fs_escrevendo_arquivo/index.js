const fs = require('fs')
const http = require('http')

const PORT = 4000

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        // método de ler arquivo
        fs.readFile('index.html', function(err,data){
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        // método de escrita de arquivo
        fs.writeFile('arquivo.txt', name, function(err,data){
            res.writeHead(302, {
                Location:'/'
            })
            return res.end()
        })
    }
    
})


server.listen(PORT, ()=>{
    console.log('Server on 😎')
})