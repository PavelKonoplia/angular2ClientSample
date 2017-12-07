import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AdminComponent } from "./admin/admin.component";
import { LoginComponent } from "./log-in/log-in.component";
import { AddProductComponent } from "../components/product/add-product/add-product.component";

import { AuthGuard } from "../services/auth-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "admin",
                component: AdminComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: "",
                        children: [
                            { path: "add-product", component: AddProductComponent },
                            { path: "", redirectTo: "add-product", pathMatch: "full" }
                        ]
                    }
                ]
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
