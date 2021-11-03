const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views')

let loginFora
let passwordFora

app.get('/login', function (req, resp){
    resp.render('login')
})
app.get('/', function (req, resp){
    resp.render('login')
})
app.get('/cadastra', function(req,resp){
    resp.render('cadastrar')
})
app.post('/cadastra', function(req,resp){
    loginFora = req.body.login
    passwordFora = req.body.senha
    resp.render('cadastroResposta')
})
app.post('/login', function(req, resp){
    const login = req.body.login
    const password = req.body.senha
    if (login === loginFora && password === passwordFora){
        let message = 'Sucesso'
        resp.render('resposta', {message, login})
    }
    else{
        let message = 'Falha'
        resp.render('resposta', {message, login})
    }
})

app.use(express.static('./public'))

let server = http.createServer(app)

server.listen(3000)

console.log('Server running in 3000 door')