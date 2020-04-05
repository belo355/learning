const express = require('express'); 
const routes = express.Router(); 

const HelloController= require('../src/controllers/HelloController')

routes.get('/',HelloController.index); 


module.exports = routes; 