const express = require("express");
const app = express();
const handlebars  = require('express-handlebars')
const bodyParser = require('body-parser')
const User = require('./models/User');
const Sequelize = require('sequelize');



// Template Engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Express = antigo body-parser
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Conexão com banco de dados MySql
const sequelize = new Sequelize('comer_register', 'root', 'Gab090604', {
  host: "localhost",
  dialect: 'mysql'
})

// Rotas
 
 app.get('/prin', function(req, res){
    res.render('index')
 })

 app.get('/reg', function(req, res){
    res.render('register')
 })

 // Falta a de genero tirar duvida com Diogo (se não conseguir fazer como texto)
 app.post('/received',function(req, res){
   res.send(`firstname: ${req.body.firstname} lastname: ${req.body.lastname} email: ${req.body.email} 
             password: ${req.body.password} Confirmpassword: ${req.body.Confirmpassword} gender: ${req.body.gender} `)
 })


 // Localhost:3000
app.listen(3000, function(){
    console.log("Servidor Rodando n a url http//localhost:3000");
});
