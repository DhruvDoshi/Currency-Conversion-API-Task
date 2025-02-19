const axios = require('axios');

const EXCHANGE_RATE_API_URL = 'https://api.exchangerate-api.com/v4/latest/';
const API_KEY = process.env.EXCHANGE_RATE_API_KEY; // Read the API key from an environment variable

exports.convertCurrency = async (fromCurrency, toCurrency, amount) => {
    try {
        const response = await axios.get(`${EXCHANGE_RATE_API_URL}${fromCurrency}`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}` // Include the API key in the request headers
            }
        });
        const rates = response.data.rates;
        const rate = rates[toCurrency];
        if (!rate) throw new Error('Invalid target currency');
        const convertedAmount = amount * rate;
        return { fromCurrency, toCurrency, amount, convertedAmount, rate };
    } catch (error) {
        throw new Error('Error fetching exchange rates');
    }
};
