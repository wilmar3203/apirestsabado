//Importar mongoose
import mongoose from 'mongoose';
export async function conectarConBD(){
    try{

        await mongoose.connect(process.env.DATABASE);
        console.log("Exito conectandose a la base de datos")
    
    }catch(error){
        console.log("UPSSS..."+error)
    }
}