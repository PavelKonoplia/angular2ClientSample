import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ManageProductsComponent, EditProductComponent } from "./index";
import { LoginComponent } from "./log-in/log-in.component";
import { AddProductComponent } from "../components/product/add-product/add-product.component";

import { AuthGuard } from "../services/auth-guard.service";
import { CanDeactivateGuard } from "../services/can-deactivate-guard.service";
import { EditProductResolve } from '../services/edit-product-resolve.service';

@NgModule({
    imports: [
        RouterModule.forChild([

            { path: "manage-products", component: ManageProductsComponent },
            {
                path: "manage-products/:id",
                component: EditProductComponent,
                canDeactivate: [CanDeactivateGuard], // CanDeactivateGuard - проверка возможности перенаправления с PhraseDetailsComponent на другой компонент.
                // Свойство позволяет определить объект, который будет доступен в данных ActivatedRoute в компоненте, который получил пользователь.
                resolve: {
                    phrase: EditProductResolve
                }
            },
            // {
            //     path: "manage-products",
            //     component: ManageProductsComponent,
            //     canActivate: [AuthGuard],
            //     children: [
            //         {
            //             path: ":id",
            //             component: EditProductComponent,
            //             canDeactivate: [CanDeactivateGuard]
            //         }
            //         ,{
            //             path: ""
            //         }
            //     ]
            // },
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
