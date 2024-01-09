const Router = require('express')
const router = new Router()
const cartController = require('../controllers/cartController')

router.get('/', cartController.getAllItems)
router.post('/item', cartController.addItem)
router.delete('/del/:itemId', cartController.deleteItem)
router.delete('/:userId', cartController.deleteAllItems)
router.put('/:itemId/updateQuantity', cartController.updateQuantity)

module.exports = router