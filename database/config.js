const mongoose = require('mongoose') 
const dbConection = async() =>{
    try {
       
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexion exitosa a la base de datos Bienvenido ')
    } catch (error) {
        console.log(error)
    }
}


module.exports = { dbConection }