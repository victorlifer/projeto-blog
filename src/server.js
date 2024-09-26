const express = require('express')
const path = require('node:path')
const router = require('./router')
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('pubic'))

app.use(express.urlencoded({ extended:true }))

app.use(router)

app.listen(3000, ()=>{
    console.log('SERVIDOR ATIVADO HTTP://LOCALHOST:3000')
})