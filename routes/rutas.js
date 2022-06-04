import express from 'express'

//IMPORTO EL CONTROLADOR DE HABITACIONES
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
//IMPORTO EL CONTROLADOR DE RESERVAS
import{ ControladorReserva } from '../Controllers/ControladorReserva.js'

//CREO UN OBJETO DE LA CLASE CONTROLADORHABITACION
let controladorHabitacion = new ControladorHabitacion()
//CREO UN OBJETO DE LA CLASE CONTROLADORRESERVA
let controladorReserva = new ControladorReserva()
//UTILIZO EL METODO Router() DE EXPRESS
export let rutas=express.Router()

//LISTA DE SERVICIOS QUE OFRECE EL API
//RUTAS HABITACIONES
  rutas.get('/api/v1/sabado', controladorHabitacion.buscarTodas)
  rutas.get('/api/v1/sabado/:id', controladorHabitacion.buscarPorId)  
  rutas.post('/api/v1/sabado', controladorHabitacion.registar)
  rutas.put('/api/v1/sabado/:id', controladorHabitacion.editar)
  rutas.delete('/api/v1/sabado/:id',controladorHabitacion.eliminar)

  //RUTAS RESERVAS

  rutas.get('/api/v1/sabado/reservas/:id', controladorReserva.buscarPorId)  
  rutas.post('/api/v1/sabado/reservas', controladorReserva.reservar)
  rutas.put('/api/v1/sabado/reservas/:id', controladorReserva.editar)
  rutas.delete('/api/v1/sabado/reservas/:id',controladorReserva.eliminar)