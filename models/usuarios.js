const {Schema,model}= require('mongoose')

const UsuariosSchema =({
  usuario:{
    type:String,
    unique:true,
    required:[true,'El usuario es requerido']
  },
  password:{
    type:Number,
    required:[true,'El password es requerido']
  }
})
module.exports = model ('usuarios',UsuariosSchema)