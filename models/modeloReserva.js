import mongoose from "mongoose";

const Schema = mongoose.Schema;//esquema de datos(datos tiene mi modelo)

//creo mi propio esquema de datos
const Reserva = new Schema({
    nombreCliente: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    telefono: {
        type: String,
        required: true
    },

    fechaIngreso: {
        type: Date,
        required: true
    },

    fechaSalida: {
        type: Date,
        required: true
    },

    numeroPersonas:{
        type: Number,
        required: true
    },

    costo: {
        type: Number,
        required: true
    }
})

//se envia el modelo de datos
 export const modeloReserva=mongoose.model('reservas', Reserva);