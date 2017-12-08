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
var app_user_routing_module_1 = require("./app-user-routing.module");
var product_module_1 = require("../components/product/product.module");
var AppUserModule = /** @class */ (function () {
    function AppUserModule() {
    }
    AppUserModule = __decorate([
        core_1.NgModule({
            imports: [
                product_module_1.ProductModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                app_user_routing_module_1.AppUserRoutingModule
            ],
            declarations: [
                index_1.LoginComponent, index_1.ManageProductsComponent, index_1.EditProductComponent
            ]
        })
    ], AppUserModule);
    return AppUserModule;
}());
exports.AppUserModule = AppUserModule;
//# sourceMappingURL=app-user.module.js.map