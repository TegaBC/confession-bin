import express from "express" 
import PostModel from "../models/postModel.js" // grab model
import { createPost, getNewPosts, getPostFromId } from "../controllers/postsController.js"

const router = express.Router()
// create a new router that can be used in the index.js file using the
// express.use({directory}, router) function

/* Define our routes (keep in mind the top level directory)
if the directory that is stated in the express.use function */
router.post("/create", createPost)
router.get("/", getNewPosts)
router.get("/:id", getPostFromId)

export default router