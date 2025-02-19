const express = require('express');
const router = express.Router();
const CurrencyConversionController = require('../controllers/CurrencyConversionController');

router.get('/convert', CurrencyConversionController.convertCurrency);

module.exports = router;
