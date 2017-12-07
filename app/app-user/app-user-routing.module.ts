import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ManageProductsComponent } from "./admin/manage-products/manage-products.component";
import { LoginComponent } from "./log-in/log-in.component";
import { AddProductComponent } from "../components/product/add-product/add-product.component";

import { AuthGuard } from "../services/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "manage-products",
                component: ManageProductsComponent,
                canActivate: [AuthGuard],
            },
            {
                path: "add-product",
                component: AddProductComponent,
                canActivate: [AuthGuard],
            },
            {
                path: "login",
                component: LoginComponent,
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppUserRoutingModule { }
