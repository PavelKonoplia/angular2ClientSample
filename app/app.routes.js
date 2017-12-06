"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./components/home/home.component");
var index_1 = require("./components/product/index");
exports.routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: home_component_1.HomeComponent
    },
    {
        path: "products",
        component: index_1.ProductListComponent
    },
    {
        path: "product/:id",
        component: index_1.ProductDetailsComponent
    }
];
//# sourceMappingURL=app.routes.js.map