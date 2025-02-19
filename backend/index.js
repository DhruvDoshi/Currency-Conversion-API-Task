require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();

const AuthMiddleware = require('../middlewares/Authentication');
const {ROLE} = require('../config/constant');
const router = express.Router();

const CurrencyConversionRouter = require('./currencyConversion');
const AuthRouter = require('./auth');
const PaymentRouter = require('./payment');
const TicketRouter = require('./ticket');
const ItemRouter = require('./item');
const NyxcipherRouter = require('./nyxcipher');
const UserRouter = require('./user');

router.get('/', AuthMiddleware(["Customer", "Sponsor"]), (req, res) => {
    res.status(200).send({data: 'Welcome Oasis'});
});

router.use('/currency-conversion', CurrencyConversionRouter);
router.use('/auth', AuthRouter);
router.use('/payment', PaymentRouter);
router.use('/ticket', TicketRouter);
router.use('/item', ItemRouter);
router.use('/nyxcipher', NyxcipherRouter);
router.use('/user', UserRouter);

module.exports = router;