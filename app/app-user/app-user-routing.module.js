"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var manage_products_component_1 = require("./admin/manage-products/manage-products.component");
var log_in_component_1 = require("./log-in/log-in.component");
var add_product_component_1 = require("../components/product/add-product/add-product.component");
var auth_guard_service_1 = require("../services/auth-guard.service");
var AppUserRoutingModule = /** @class */ (function () {
    function AppUserRoutingModule() {
    }
    AppUserRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    {
                        path: "manage-products",
                        component: manage_products_component_1.ManageProductsComponent,
                        canActivate: [auth_guard_service_1.AuthGuard],
                    },
                    {
                        path: "add-product",
                        component: add_product_component_1.AddProductComponent,
                        canActivate: [auth_guard_service_1.AuthGuard],
                    },
                    {
                        path: "login",
                        component: log_in_component_1.LoginComponent,
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppUserRoutingModule);
    return AppUserRoutingModule;
}());
exports.AppUserRoutingModule = AppUserRoutingModule;
//# sourceMappingURL=app-user-routing.module.js.map