//Import 
const mongoose = require("mongoose");
const { Schema } = mongoose;
//Schema 
const Componentchema = new Schema({
    name: {type: String, required: true},
    mr: {type: String, required: true},
    type: {type: String, required: true},
    espec: {type: String, required: true}
})
//Model 
module.exports = mongoose.model("Componente", Componentchema); 