const postModel = require('../model/postModel')

const postsController = {
    // GET /

    index: (req,res)=>{
        const posts = postModel.getAllPosts()
        res.render('index', { posts })
    },

    // GET/POSTS/ID:
    show: (req, res) =>{
        const id = req.params.id
        const post = postModel.getPostById(id)
        res.render('post', {post})
    }
}


module.exports = postsController