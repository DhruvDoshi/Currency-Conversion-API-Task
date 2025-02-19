# Currency Conversion API

## Description

This project is a simple Currency Conversion API that uses an external exchange rate API to convert currencies. It includes endpoints to return currency conversion data.

## Setup

1. Ensure you are using Node.js version 20 or higher.
2. Clone the repository.
3. Install dependencies:
    ```bash
    npm install
    ```
4. Copy the `.env.example` file to `.env` and update it with your API key:
    ```bash
    cp .env.example .env
    nano .env
    ```
5. Start the server:
    ```bash
    npm start
    ```

## Endpoints

- `GET /currency-conversion/convert?fromCurrency=USD&toCurrency=EUR&amount=100`
  - Converts 100 USD to EUR.

## Assumptions

- The external exchange rate API used is `https://api.exchangerate-api.com/v4/latest/`.
- The API key is required for this exchange rate API.
- Error handling is implemented for invalid currencies and API request failures.

## Best Practices

- The code is modular and follows best practices in JavaScript and Node.js development.
- The code is well-documented and includes comments for clarity.