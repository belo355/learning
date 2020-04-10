const express = require('express'); 
const routes = express.Router(); 

// const HelloController= require('../src/controllers/HelloController'); 
const UserController= require('../src/controllers/UserController'); 

routes.get('/users',UserController.index); 
routes.post('/users', UserController.create); 
routes.put('/users/:id', UserController.update); 


//todo: add logger de request
//ajustar request.update 

module.exports = routes; 