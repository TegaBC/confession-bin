export const createPost = (req, res) => {
    const { title, content } = req.body

    // check if title is too long
    if (title.length > 255) {
        res.status(500).json({ error: "Title is too long."})
        return
    } 

    // create a post, if it errors out we let them know it didnt work
    try {
        PostModel.create({
            title: title,
            content: content, 
        })
        res.json({ message: "Post completed" })
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Post failed to upload." })
    }
}

export const getNewPosts = async (req, res) => {
    try {
        const messages = await PostModel.find({}) // find all posts, id backwards as a timestamp so newest posts first, and limit 30
            .sort({ _id: -1 })
            .limit(30)
            .exec();

        res.json({ message: messages })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to fetch posts" })
    }
}

export const getPostFromId = async (req, res) => {
    const { id } = req.params
    try {
        const post = await PostModel.findOne({ _id: id }).exec()

        if (!post) {
            res.status(400).json({ message: "Post does not exist" })
        } else {
            res.json({ message: post })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to fetch post" })
    }
}