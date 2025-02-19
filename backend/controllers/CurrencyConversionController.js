const CurrencyConversionService = require('../services/CurrencyConversionService');

exports.convertCurrency = async (req, res) => {
    const { fromCurrency, toCurrency, amount } = req.query;
    if (!fromCurrency || !toCurrency || !amount) {
        return res.status(400).json({ error: 'Missing required query parameters' });
    }
    try {
        const result = await CurrencyConversionService.convertCurrency(fromCurrency, toCurrency, amount);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
