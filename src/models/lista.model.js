import mongoose from "mongoose";

const listaSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true,
    },
    tematica:{
        type: String,
        required: true, 
    },
    autor:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    }
}, 
 {
    timestamps:true,
}
);

export default mongoose.model("Lista", listaSchema);

