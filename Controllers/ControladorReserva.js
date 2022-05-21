export class ControladorReserva{

    constructor(){}

 

    buscarPorId(request,response){
        
       
        let id=request.params.id
        console.log(id)

        try{//todo sale bien

            response.status(200).json({
                mensaje:"Exito buscando las reservas"+id,
                data:datos,
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

    reservar(request,response){

        let datosPeticion=request.body
        try{

            response.status(200).json({
                mensaje: "Exito reservando la habitacion",
                data:datosPeticion,
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

    editar(request,response){
        let id = request.params.id
        let datosPeticion = request.body
        try{

            response.status(200).json({
                mensaje: "Exito editando la reserva",
                data:datosPeticion,
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

    eliminar(request,response){
        let id = request.params.id

        try{

            response.status(200).json({
                mensaje: "Exito eliminando la reserva",
                data:[],
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