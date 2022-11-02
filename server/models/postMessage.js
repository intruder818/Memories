import mongoose from "mongoose";

const postShema=mongoose.Schema({

    title:{
        type:String
    },
    message:String,
    creator:String,
    tags:[String],
    likeCount:{
        type:Number,
        default:0
    },
    selectedFile: String,
    createdAt:{
        type:Date,
        default:new Date()
    }

})

const PostMessage=mongoose.model("PostMessage",postShema)

export default PostMessage