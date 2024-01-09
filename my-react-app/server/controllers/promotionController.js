const { Promotion } = require('../models/models');

class PromotionsController {
async getPromotions(req, res) {
  try {
    const promotions = await Promotion.findAll();
    res.json(promotions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
  }
}
}

module.exports = new PromotionsController();