"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./components/product/index");
exports.routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: index_1.ProductListComponent
    },
    {
        path: "products",
        component: index_1.ProductListComponent
    }
];
//# sourceMappingURL=app.routes.js.map