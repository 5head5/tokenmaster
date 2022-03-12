require("dotenv").config();

const { Spot } = require('@binance/connector')

const apiKey = 'process.env.BNBAPIKEY'
const apiSecret = 'process.env.BNBAPISECRET'
const client = new Spot(apiKey, apiSecret)

// Get account information
client.account().then(response => client.logger.log(response.data))
