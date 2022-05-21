import mongoose from "mongoose";

const Schema = mongoose.Schema;//esquema de datos(datos tiene mi modelo)

//creo mi propio esquema de datos
const Reserva = new Schema({
    nombreCliente:{
        type:String,
        required:true
    },
    fechaIngreso:{
        type:Date,
        required:true
    },
    fechaSalida:{
        type:String,
        required:true
    },
    idCliente:{
        type:String,
        required:true
    },
    pais:{
        type:String,
        required:true
    },
    tarjetaCredito:{
        type:Number,
        required:true
    },
    idHabitacion:{
        type:String,
        required:true
    },
    Costo:{
        type:Number,
        required:true
    }
})

//se envia el modelo de datos
const modeloReserva=mongoose.model('reservas', Reserva);