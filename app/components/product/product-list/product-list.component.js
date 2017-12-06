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
var product_service_1 = require("../../../services/product.service");
var category_service_1 = require("../../../services/category.service");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.currentCategory = "All";
        this.products = productService.getData();
        this.categories = categoryService.getData();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.rows ? this.rows : this.rows = this.products.length;
        this.products = this.products.slice(0, this.rows);
    };
    ProductListComponent.prototype.delete = function (p) {
        var id = this.products.indexOf(p);
        if (id > -1) {
            this.products.splice(id, 1);
            console.log(p.id);
        }
    };
    ProductListComponent.prototype.productAdded = function (event) {
        event ? this.products = this.products.concat(event) : 0;
    };
    ProductListComponent.prototype.getClass = function (p) {
        return p.price > 500 ? "red" : "myrow";
    };
    ProductListComponent.prototype.setCurrentCategory = function (target) {
        this.currentCategory = target;
    };
    ProductListComponent.prototype.thisCategory = function (p) {
        return this.currentCategory == "All" ? true : (p.category == this.currentCategory ? true : false);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ProductListComponent.prototype, "rows", void 0);
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-list',
            templateUrl: 'product-list.component.html',
            styleUrls: ['product-list.component.css']
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService, category_service_1.CategoryService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map