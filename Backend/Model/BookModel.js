import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
          },
        author:{
            type:String,
            required:true,
        },
        publishYear:{
            type:Number,
            required:true,
            min:1700,
            max:2023,
        },
    },
    // {
    //     timestamps: true,
    // },
); 
export const Book = mongoose.model('Book', bookSchema);
