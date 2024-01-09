const { Router } = require('express');
const router = new Router();
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const cartRouter = require('./cartRouter');
const promotionRouter = require('./promotionRouter');

router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/cart', cartRouter);
router.use('/promotion', promotionRouter);

module.exports = router