exports.config = function () {
    var mongoose = require('mongoose');
    var url = 'mongodb://127.0.0.1:27017/coinmania';
    try{
        mongoose.connect(url); //- starting a db connection
    }catch(err) {
        mongoose.createConnection(url); //- starting another db connection
    }
};

exports.mongoDbModule = function (){
    //litteral 
    var db = {};
    db.Account = require('../model/account.model');
    return db;
};

exports.exchangeConstant = function(){
    ////Full support for GDAX, Poloniex, Kraken, Bittrex, till here added//Quadriga, Gemini, Bitfinex, CEX.IO and Bitstamp

    var exchange = {};
    exchange.BitrexApiUrl = '';
    exchange.BitrexApiKey = '416cb75f62b1439097c2bc1f41919398';
    exchange.BitrexApiSecret = 'ce97197c38c24132971f55ee56f091b3';
    exchange.BitrexVerbose = true; //true false
    exchange.BitrexCleartext = true; //true false
    exchange.BitrexMarket = 'USDT-ETH';
    //GDAX npm install gdax
    
    exchange.GDAXApiKey = '416cb75f62b1439097c2bc1f41919398';
    exchange.GDAXApiSecret = 'ce97197c38c24132971f55ee56f091b3'; 
    exchange.GDAXapiURI = 'https://api.gdax.com';
    exchange.GDAXsandboxURI = 'https://api-public.sandbox.gdax.com';
    //Poloniex npm i poloniex-api-node

    exchange.PoloniexApiKey = '416cb75f62b1439097c2bc1f41919398';
    exchange.PoloniexApiSecret = 'ce97197c38c24132971f55ee56f091b3'; 
    exchange.PoloniexapiURI = 'https://poloniex.com/public';
    exchange.PoloniexsandboxURI = 'https://poloniex.com/tradingApi';
  
    //

    return exchange;
};

 