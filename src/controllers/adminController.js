const postModel = require('../model/postModel')

module.exports = {
    //get /admin
    // pegando o admin
    showAdminPage : (req, res) =>{
        const posts = postModel.getAllPosts()
        res.render('admin', {posts})
    },

    // get/admin/ create
    // pegando e criando um admin
    showAdminPage: (req, res) =>{
        res.render('create')
    },

    //post/admin/creater
    createPost: (req, res) =>{
        const { title, content} = req.body

        const post = postModel.createPost(title, content)
        postModel.savePost(post)

        res.redirect('./admin')
    },

    //POST /ADIMIN/edit/:ID
    showEditPage: (req ,res) =>{
        const {id } = req.params
        const post = postModel.getAllPosts(id)

        res.render('edit', {post})
    },

    //POST /ADIMIN/UPDATE/:ID

    updatePost:(req, res) =>{
        const { id } = req.params
        const { title, content } = req.body

        const updatedPost = { title, content}
        postModel.updatePost(id, updatedPost)
        
        res.redirect('/')
    },

    // POST /admin/delete/:id
  deletePost: (req, res) => {
    const { id } = req.params

    postModel.deletePost(id)

    res.redirect('/admin')
  }

}