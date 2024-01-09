const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')

router.get('/', productController.getProducts)
router.post('/add', productController.createProduct)
  
module.exports = router