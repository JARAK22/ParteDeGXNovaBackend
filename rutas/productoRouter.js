const { Router } = require('express');
const ProductoController = require('../controllers/ProductoController');

const router = Router();

router.get('/productos', ProductoController.getProductos);
router.get('/producto/:id', ProductoController.getProductoId);
router.post('/producto', ProductoController.crearProducto);


router.put('/producto/:id', ProductoController.actualizarProducto);
router.delete('/producto/:id', ProductoController.eliminarProducto);

module.exports = router;