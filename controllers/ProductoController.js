const { Producto } = require('../models');

const ProductoController = {
  async getProductos(req, res) {
    try {
      const productos = await Producto.findAll();
      return res.status(200).json(productos);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener productos' });
    }
  },

  async getProductoId(req, res) {
    try {
      const { id } = req.params;
      const producto = await Producto.findByPk(id);
      return res.status(200).json(producto);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener producto' });
    }
  },

  async crearProducto(req, res) {
    try {
      const { nombre, precio } = req.body;
      const producto = await Producto.create({ nombre, precio });
      return res.status(201).json({ message: 'Producto creado', producto });
    } catch (error) {
      return res.status(500).json({ error: 'Error al crear producto' });
    }
  },

  async actualizarProducto(req, res) {
    try {
      const { id } = req.params;
      const { nombre, precio } = req.body;
      const producto = await Producto.update(
        { nombre, precio },
        { where: { id } }
      );
      return res.status(200).json(producto);
    } catch (error) {
      return res.status(500).json({ error: 'Error al actualizar producto' });
    }
  },

  async eliminarProducto(req, res) {
    try {
      const { id } = req.params;
      const producto = await Producto.destroy({ where: { id } });
      return res.status(200).json(producto);
    } catch (error) {
      return res.status(500).json({ error: 'Error al eliminar producto' });
    }
  },
}

module.exports = ProductoController;