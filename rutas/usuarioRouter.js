const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/usuario', UsuarioController.getUsuarios);
router.get('/usuario/:id', UsuarioController.getUsuario);
router.get('/usuario-email/:email', UsuarioController.getUsuarioPorEmail);
router.get('/prueba', UsuarioController.prueba);

module.exports = router;