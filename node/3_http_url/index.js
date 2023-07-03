const http = require('https')
const PORT = 3000

const server = http.createServer((req, res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type','text/html; charset=UTF-8')

    if(!name){
        res.end('<h1>Preencha seu nome:</h1> <form method="GET"> <input text="text" name="name"> <input type="submit" value="Enviar" /> </form>')
    }else{
        res.end(`Seja Bem Vindo ${name}`)
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})