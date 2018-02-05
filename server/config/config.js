exports.config = function () {
    var mongoose = require('mongoose');
    var url = 'mongodb://127.0.0.1:27017/cartsanov';
    try {
        mongoose.connect(url); //- starting a db connection
    }catch (err) {
        mongoose.createConnection(url); //- starting another db connection
    }
}

exports.mongoDbModule = function () {
    var db = {};
    db.Affilates = require('../models/affliate.model');
    db.Category = require('../models/category.model');
    db.Product = require('../models/product.model');
    db.MajorCategory = require('../models/mjrcategory.model');
    db.ProductPaging = require('../models/productpaging.model');
    db.ProductMapped = require('../models/productmap.model');
    return db;
};

exports.affilatesAppDir = function () {
    var path = {};
    //  path.flipkart = '/var/www/html/flipkart/';
    //path.snapdeal = '/var/www/html/snapdeal/';
    path.flipkart = './flipkart/';
    path.snapdeal = './snapdeal/';

    return path;
};