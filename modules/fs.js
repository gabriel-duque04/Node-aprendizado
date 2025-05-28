const { error } = require('console')
const fs = require('fs')
const path = require('path')

//make diretory

/* fs.mkdir(path.join(__dirname, '/test'),(error) => {
    if(error){
        return console.log("Erro : ",error);
        
    }

    console.log("Pasta criada com sucesso!")
}) */
//write file
/*
estrutura:
(nomedoarquivojs).(método desejado)(path.join(dirname, nome do diretorio, nome do arquivo), 'conteudo a adicionar ou criar', (error) => tratamento do erro)
*/
/* fs.writeFile(path.join(__dirname, '/test' , 'test.txt'), 'hello node' , (error) => {
    if(error){
        return console.log("Erro: ", error);
    }

    console.log("Criado com sucesso!")
}) */

/* fs.appendFile(path.join(__dirname, '/test', 'text.txt'), 'hello world!', (error) => {
    if(error){
        console.log("Erro: ", error)
    }
    console.log("Deu bom!")
}) */

fs.readFile(path.join(__dirname, "/test", "text.txt"), "utf8", (error, data) => {
    if(error){
        console.log("Erro: ", error);
    }
    console.log(data);
})