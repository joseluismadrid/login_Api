const {response} = require('express')
const Usuario = require('../models/usuarios')

const getUsuario = async (req, res) => {
  const Usuarios = await Usuario.find()
  res.json({
    msg: Usuarios
  })

}
const postUsuario = async (req, res) => {
  const info = req.body
  let mensaje = 'Insercion Exitosa'
  try {
    const Usuarios = new Usuario(info)
    await Usuarios.save()
    console.log(Usuarios)
  } catch (error) {
    mensaje = error
    console.log(error)
  }
  res.json({
    msg: mensaje
  })
}
const putUsuario = async (req, res) => {
  const { usuario, password } = req.body
  let mensaje = 'Actualizacion Exitosa'
  try {
    const Usuarios = await Usuario.findOneAndUpdate({usuario:usuario },{password:password})
  } catch (error) {
    mensaje = error
    console.log(error)
  }
  res.json({
    msg: mensaje
  })
}
const deleteUsuario = async (req, res) => {
  const {usuario} = req.body
  let mensaje = ''

  try {
    const Usuarios = await Usuario.findOneAndDelete({usuario:usuario})
    mensaje ='Eliminacion exitosa'
  } catch (error) {
    mensaje = error
    console.log(error)
  }
  res.json({
    msg: mensaje
  })
}
module.exports ={
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario
}