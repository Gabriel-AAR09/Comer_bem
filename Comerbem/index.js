const express = require("express");
const app = express();
const handlebars  = require('express-handlebars');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Sequelize = require('sequelize');

//Conexão com a pasta pulbic
app.use(express.static('public'));

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
 
 app.get('/home', function(req, res){
    res.render('home')
 })

 app.get('/reg', function(req, res){
    res.render('register')
 })

 app.get('/login', function(req, res){
   res.render('login')
 })

 // falta a rota de pegar os dados do banco de dados é logar!

 // Falta a de genero tirar duvida com Diogo (se não conseguir fazer trocar po texto)
 app.post('/received',function(req, res){
   User.create({
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      Confirmpassword: req.body.Confirmpassword,
      gender: req.body.gender
   }).then(function(){
      res.redirect('/home')
   }).catch(function(erro){
      res.send("Houve um erro!" + erro)
   })
 })

 
 // Localhost:3000
app.listen(3000, function(){
    console.log("Servidor Rodando n a url http//localhost:3000");
});
