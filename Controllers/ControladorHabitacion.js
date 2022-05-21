//CONTROLADOR:
//1. Recibir peticiones
//2. ejecutar logica de negocio
//3. llamar capa de SERVICIOS
//4. Enviar respuestas al cliente
export class ControladorHabitacion{

    constructor(){}

    buscarTodas(request,response){

        let datos = [{nombre:'wilmar',edad:27},{nombre:'alejandra',edad:29}]//borrar despues

        try{//todo sale bien

            response.status(200).json({
                mensaje:"Exito buscando los datos",
                data:datos,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Error buscando los datos: "+error,
                data:[],
                estado:false
            })
        }

        
    }

    buscarPorId(request,response){
        
        let datos = [{nombre:'wilmar',edad:27}]//borrar despues
        let id=request.params.id
        console.log(id)

        try{//todo sale bien

            response.status(200).json({
                mensaje:"Exito buscando los datos"+id,
                data:datos,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Error buscando los datos: "+error,
                data:[],
                estado:false
            })
        }
    }

    registar(request,response){

        let datosPeticion=request.body
        try{

            response.status(200).json({
                mensaje: "Exito agregando la habitacion",
                data:datosPeticion,
                estado:true

            })


        }catch(error){

            response.status(400).json({
                mensaje: "Fallamos agregando la habitacion",
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
                mensaje: "Exito editando la habitacion",
                data:datosPeticion,
                estado:true

            })

        }catch(error){

            response.status(400).json({
                mensaje: "Fallamos editando la habitacion"+error,
                data:[],
                estado:false

            })


        }
    }

    eliminar(request,response){
        let id = request.params.id

        try{

            response.status(200).json({
                mensaje: "Exito eliminando la habitacion",
                data:[],
                estado:true

            })

        }catch(error){

            response.status(400).json({
                mensaje: "Fallamos eliminando la habitacion"+error,
                data:[],
                estado:false

            })


        }
    }


}