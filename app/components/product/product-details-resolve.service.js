"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("../../services/product.service");
// Resolve - интерфейс указывает на то, что объект может быть поставщиком данных (data provider)
// Подобные объекты позволяют избедать проблемы связанной с тем что компонент уже отобразился пользователю а данные для компонента еще не доступны.
var ProductDetailsResolve = /** @class */ (function () {
    function ProductDetailsResolve(service, router) {
        this.service = service;
        this.router = router;
    }
    ProductDetailsResolve.prototype.resolve = function (route) {
        var _this = this;
        var id = +route.params["id"];
        return this.service.getProduct(id).then(function (product) {
            if (product) {
                return product;
            }
            else {
                _this.router.navigate(["/products"]);
                return false;
            }
        });
    };
    ProductDetailsResolve = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.Router])
    ], ProductDetailsResolve);
    return ProductDetailsResolve;
}());
exports.ProductDetailsResolve = ProductDetailsResolve;
//# sourceMappingURL=product-details-resolve.service.js.map