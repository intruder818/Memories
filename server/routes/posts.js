import express from "express"
 const router=express.Router()

import {getPosts,createPost,editPost,deletePost} from "../controllers/postController.js"


 router.get('/',getPosts)

 router.post('/',createPost)

 router.put('/:id',editPost)
router.delete('/:id',deletePost)


 export default router