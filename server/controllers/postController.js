
import PostMessage from "../models/postMessage.js"

// Route /posts/
// get

export const getPosts=async (req,res)=>{

   try {
    const posts= await PostMessage.find()
    console.log(posts);
    res.status(200).json(posts)
    
   } catch (error) {

    res.status(404).json({message:error.message})
    
   }
 }


 export const createPost=async (req,res)=>{

    try {

        const postData=req.body

        const newPost=new PostMessage(postData)

        await newPost.save()

        res.status(200).json(newPost);
        
    } catch (error) {
        res.status(404)

        res.json({message:error.message})
        
    }

 }