const express = require('express'); 
const routes = express.Router(); 

const UserController= require('../src/controllers/UserController'); 
const SchoolController = require('../src/controllers/SchoolController'); 
const FavoriteController = require('../src/controllers/FavoriteController'); 

routes.get('/users',UserController.index); 
routes.post('/users', UserController.create); 
routes.put('/users/update/', UserController.update); 
routes.delete('/users/delete/', UserController.delete); 

routes.get('/schools', SchoolController.index); 
routes.post('/schools', SchoolController.create); 
routes.put('/school/update/', SchoolController.update); 
routes.delete('/school/delete/', SchoolController.delete); 

routes.get('/favorite', FavoriteController.index);
routes.post('/favorite', FavoriteController.create);
// routes.delete('/favorite/delete/', FavoriteController.delete);


module.exports = routes;  