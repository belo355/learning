const express = require('express'); 
const routes = express.Router(); 

const UserController= require('../src/controllers/UserController'); 
const SchoolController = require('../src/controllers/SchoolController'); 

routes.get('/users',UserController.index); 
routes.post('/users', UserController.create); 
routes.put('/users/update/', UserController.update); 
routes.delete('/users/delete/', UserController.delete); 

routes.get('/school', SchoolController.index); 
routes.post('/school', SchoolController.create); 
routes.put('/school/:id', SchoolController.update); 


module.exports = routes;  