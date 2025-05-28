const mongoose = require('mongoose');

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@aprendizadonode.tnkfifl.mongodb.net/?retryWrites=true&w=majority&appName=AprendizadoNode` , 
        (error) => {
        if(error) {
            return console.log('Ocorreu um erro ao se conetar com o banco de dados : ', error)
        }
        return console.log('Conectado com sucesso!!!')
    })
}

module.exports = connectToDataBase;