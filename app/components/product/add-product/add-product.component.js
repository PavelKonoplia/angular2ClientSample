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
var product_model_1 = require("../../../models/product.model");
var category_service_1 = require("../../../services/category.service");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(categoryService) {
        this.categoryService = categoryService;
        this.product = new product_model_1.ProductModel(undefined, undefined, undefined, undefined);
        this.invalid = false;
        this.productAdded = new core_1.EventEmitter();
        this.categories = categoryService.getData();
    }
    AddProductComponent.prototype.addProduct = function () {
        this.invalid = false;
        if (this.product.id && this.product.name && this.product.price && this.product.category) {
            this.productAdded.emit(this.product);
        }
        else {
            this.invalid = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AddProductComponent.prototype, "categories", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AddProductComponent.prototype, "productAdded", void 0);
    AddProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-product',
            templateUrl: 'add-product.component.html',
            styleUrls: ['add-product.component.css']
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=add-product.component.js.map