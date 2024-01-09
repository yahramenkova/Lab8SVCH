const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/reg', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.get('/:userId', userController.getUserById)
router.put('/:userId/changePassword', userController.changePassword)
router.get('/dec/:email', userController.getDecryptedPassword)

module.exports = router