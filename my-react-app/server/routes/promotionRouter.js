const Router = require('express')
const router = new Router()
const promotionController = require('../controllers/promotionController')

router.get('/', promotionController.getPromotions)
  
module.exports = router