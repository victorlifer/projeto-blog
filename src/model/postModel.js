const { post } = require("../router")

let posts = [
    { id: "1", title: "Introdução ao Node.js", content: "Descubra como o Node.js revolucionou o desenvolvimento web com sua arquitetura orientada a eventos.", createdAt: new Date(), updatedAt: new Date() },
	{ id: "2", title: "Construindo APIs com Node.js", content: "Aprenda a criar APIs RESTful robustas e escaláveis utilizando o Node.js e o framework Express.", createdAt: new Date(), updatedAt: new Date() },
	{ id: "3", title: "Gerenciando Pacotes com npm", content: "Saiba como utilizar o npm para instalar, atualizar e gerenciar pacotes de maneira eficiente em projetos Node.js.", createdAt: new Date(), updatedAt: new Date() }
]

const postModel = {
    // retornando valores 
    getAllPosts(){
        return posts
    },
    // pegando valores
    getPostById(id){
        return posts.find(posts => posts.id === id)
    },
    //criando valores com title e content
    createPost(title, content){
        const post = {
            id:Data.now().toString(),
            title:title,
            content:content,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        return post
    },
    // salvando todo os post
    savePost(post){
        post.unshift(post)
    },

    // fazendo atualização
    updatePost(id, updatedPost){
        const index = post.findIndex(post => post.id === id)
        posts[index] = {...posts[index], ...updatedPost, updatedAt: new Date()}
    },

    // deletando

    deletePost(id){
        post = posts.filter(post => post.id !== id)
    }
}

module.exports = postModel