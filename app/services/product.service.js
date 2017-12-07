"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_model_1 = require("../models/product.model");
var products = [
    new product_model_1.ProductModel(1, "brick", 100, "construction"),
    new product_model_1.ProductModel(2, "scizers", 200, "garden"),
    new product_model_1.ProductModel(3, "sofa", 300, "house"),
    new product_model_1.ProductModel(4, "table", 400, "house"),
    new product_model_1.ProductModel(5, "shovel", 500, "garden"),
    new product_model_1.ProductModel(6, "hammer", 600, "construction"),
    new product_model_1.ProductModel(7, "rake", 700, "garden"),
    new product_model_1.ProductModel(8, "scizers for trees", 800, "garden"),
    new product_model_1.ProductModel(9, "blocks", 900, "construction"),
    new product_model_1.ProductModel(10, "water station", 1000, "garden")
];
var productsPromise = Promise.resolve(products);
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getAll = function () {
        return productsPromise;
    };
    ProductService.prototype.getProduct = function (id) {
        return productsPromise.then(function (products) { return products.find(function (x) { return x.id == id; }); });
    };
    ProductService.prototype.addProduct = function (product) {
        products = products.concat(product);
        productsPromise = Promise.resolve(products);
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map