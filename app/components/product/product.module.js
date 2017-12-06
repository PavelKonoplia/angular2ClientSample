"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms"); // для ngModel
var index_1 = require("./index");
var controls_module_1 = require("../../controls/controls.module");
var category_service_1 = require("../../services/category.service");
var product_service_1 = require("../../services/product.service");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                controls_module_1.ControlsModule,
                forms_1.FormsModule
            ],
            exports: [
                index_1.ProductListComponent, index_1.AddProductComponent, index_1.ProductDetailsComponent
            ],
            declarations: [
                index_1.ProductListComponent, index_1.AddProductComponent, index_1.ProductDetailsComponent
            ],
            providers: [category_service_1.CategoryService, product_service_1.ProductService]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map