const { Cart, Product } = require('../models/models');

class CartController {
  async addItem(req, res, next) {
    try {
      const { user_id, product_id, quantity } = req.body;

      const cartItem = await Cart.create({
        user_id,
        product_id,
        quantity
      });

      return res.json(cartItem);
    } catch (error) {
      next(error);
    }
  }

  async getAllItems(req, res, next) {
    try {
      const { userId } = req.query;
  
      const cartItems = await Cart.findAll({
        where: {
          user_id: userId
        },
        include: [Product]
      });
  
      return res.json(cartItems);
    } catch (error) {
      next(error);
    }
  }

  async deleteItem(req, res, next) {
    try {
      const { itemId } = req.params; 

      await Cart.destroy({
        where: {
          cart_id: itemId
        }
      });

      return res.json({ message: 'Item deleted successfully' });
    } catch (error) {
      next(error);
    }
  }

  async deleteAllItems(req, res, next) {
    try {
      const { userId } = req.params;

      await Cart.destroy({
        where: {
          user_id: userId
        }
      });

      return res.json({ message: 'All items deleted successfully' });
    } catch (error) {
      next(error);
    }
  }

  async updateQuantity(req, res, next) {
    try {
      const { itemId } = req.params;
  
      const cartItem = await Cart.findOne({
        where: {
          cart_id: itemId,
        },
      });
  
      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
  
      cartItem.quantity++; // Увеличение значения на 1
  
      await cartItem.save();
  
      return res.json({ message: 'Quantity updated successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartController();