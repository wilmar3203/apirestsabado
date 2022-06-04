import { ServicioReservas } from '../services/ServicioReservas.js'
export class ControladorReserva{

    constructor(){}

   

    async buscarPorId(request,response){
        let servicioReserva = new ServicioReservas()
       
        let id=request.params.id
        console.log(id)

        try{//todo sale bien

            response.status(200).json({
                mensaje:"Exito buscando las reservas"+id,
                data:await servicioReserva.buscarPorId(id),
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Error buscando la reserva: "+error,
                data:[],
                estado:false
            })
        }
    }

    async reservar(request,response){
        let servicioReserva = new ServicioReservas()

        let datosPeticion=request.body
        try{
            await servicioReserva.registrar(datosPeticion)
            response.status(200).json({
                mensaje: "Exito reservando la habitacion",
                data:null,
                estado:true

            })


        }catch(error){

            response.status(400).json({
                mensaje: "Fallamos reservando la habitacion",
                data:[],
                estado:false

            })
        }
    }

   async editar(request,response){
        let servicioReserva = new ServicioReservas()
        let id = request.params.id
        let datosPeticion = request.body
        try{
            await servicioReserva.editar(id, datosPeticion)
            response.status(200).json({
                mensaje: "Exito editando la reserva",
                data:null,
                estado:true

            })

        }catch(error){

            response.status(400).json({
                mensaje: "Fallamos editando la reserva"+error,
                data:[],
                estado:false

            })


        }
    }

    async eliminar(request,response){
        let servicioReserva = new ServicioReservas()
        let id = request.params.id

        try{
            await servicioReserva.eliminar(id)
            response.status(200).json({
                mensaje: "Exito eliminando la reserva",
                data:null,
                estado:true

            })

        }catch(error){

            response.status(400).json({
                mensaje: "Fallamos eliminando la reserva"+error,
                data:[],
                estado:false

            })


        }
    }


}