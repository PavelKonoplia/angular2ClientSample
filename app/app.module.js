"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // для ngModel
var app_component_1 = require("./app.component");
var product_module_1 = require("./components/product/product.module");
var controls_module_1 = require("./controls/controls.module");
var home_module_1 = require("./components/home/home.module");
var app_routing_module_1 = require("./app-routing.module");
var app_user_module_1 = require("./app-user/app-user.module");
var auth_guard_service_1 = require("./services/auth-guard.service");
var category_service_1 = require("./services/category.service");
var product_service_1 = require("./services/product.service");
var auth_service_1 = require("./services/auth.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_user_module_1.AppUserModule,
                home_module_1.HomeModule,
                product_module_1.ProductModule,
                controls_module_1.ControlsModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [auth_guard_service_1.AuthGuard, category_service_1.CategoryService, product_service_1.ProductService, auth_service_1.AuthService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map