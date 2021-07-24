let express = require('express');
let router = express.Router();
 
const clientes = require('../controllers/controller.js');

router.post('/api/cliente', clientes.createCliente);
router.get('/api/cliente/:id', clientes.getCliente);
router.get('/api/clientes', clientes.clientes);
router.put('/api/cliente', clientes.updateCliente);
router.delete('/api/cliente/:id', clientes.deleteCliente);

module.exports = router;