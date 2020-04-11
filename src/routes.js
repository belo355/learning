const express = require('express'); 
const routes = express.Router(); 

const UserController= require('../src/controllers/UserController'); 
const SessionController = require('../src/controllers/SessionController'); 
const SchoolController = require('../src/controllers/SchoolController'); 

routes.get('/users',UserController.index); 
routes.post('/users', UserController.create); 
routes.delete('/users/delete/:id',UserController.delete); 

routes.get('/session/', UserController.index); 

routes.get('/school', SchoolController.index); 
routes.post('/school', SchoolController.create); 
routes.put('/school/:id', SchoolController.update); 


module.exports = routes; 