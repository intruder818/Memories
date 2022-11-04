
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


 export const deletePost=async(req,res)=>{

    try {

        const postExists=await PostMessage.findById(req.params.id)

        if (!postExists){
            throw new Error("requested Post does not exist")
        }

        if (postExists){

            // const postData=req.body
            // console.log("Body Data",postData);

            // const editedPost=await PostMessage.findByIdAndUpdate(req.params.id,req.body,{new:true})

            // res.status(200).json(editedPost)


            const deletedPost=await PostMessage.findByIdAndDelete(req.params.id)
           

            res.status(200).json({deletedPost,message:"POST deleted"})

        }
        


    } catch (error) {
        res.status(404).json({message:error.message})
    }

 }




 

 export const editPost=async(req,res)=>{

    try {

        const postExists=await PostMessage.findById(req.params.id)

        if (!postExists){
            throw new Error("requested Post does not exist")
        }

        if (postExists){

            const postData=req.body
            console.log("Body Data",postData);

            const editedPost=await PostMessage.findByIdAndUpdate(req.params.id,req.body,{new:true})

            res.status(200).json(editedPost)




        }
        


    } catch (error) {
        res.status(404).json({message:error.message})
    }

 }