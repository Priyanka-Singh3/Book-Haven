import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String, 
    image:String,
    title:String,
    availability:String
})
const Book = mongoose.model("FreeBook", bookSchema);
export default Book; 