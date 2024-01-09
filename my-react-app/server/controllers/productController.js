const { Product } = require('../models/models');

class ProductsController {
  async getProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createProduct(req, res) {
    try {
      const { name, description, price, quantity, image } = req.body;
      const newProduct = await Product.create({
        name,
        description,
        price,
        quantity,
        image
      });
      res.json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new ProductsController();