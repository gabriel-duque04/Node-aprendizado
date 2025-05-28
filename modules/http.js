const http = require('http');
const { json } = require('stream/consumers');

const port = 8080;

const server = http.createServer((req,res) => {
    if(req.url == "/home"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end("<h1>Homepage</h1> ");
    }
    if(req.url == "/users"){
        const users = [
            {
                name: 'Gabriel Duque',
                email: 'gabrielrolatorta@email.com'
            },
            {
                name: 'Lico Brino',
                email: 'AhhLincon@email.com'
            }
        ]
        res.writeHead(200, {"Content-Type": "application/json"}),
        res.end(JSON.stringify(users))
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}`))