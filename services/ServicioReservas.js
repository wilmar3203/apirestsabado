import { modeloReserva } from "../Models/modeloReserva.js"
 export class ServicioReservas{
    constructor(){}
    
    async registrar(reservas){
        let reservaARegistrar = new modeloReserva(reservas)
        return await reservaARegistrar.save()
    }

    async buscarTodas(){
        let reservas = await modeloReserva.find()
        return (reservas)
    }

    async buscarPorId(id){
        let habitacion = await modeloReserva.findById(id)
        return (habitacion)
    }

    async editar(id, datos){
        return await modeloReserva.findByIdAndUpdate(id, datos)
    }

    async eliminar(id){
        return await modeloReserva.findByIdAndRemove(id)
    }
}