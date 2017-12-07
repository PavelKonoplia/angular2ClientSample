import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductListComponent, AddProductComponent, ProductDetailsComponent } from "./index";
import { ProductDetailsResolve } from './product-details-resolve.service';
import { CanDeactivateGuard } from "../../services/can-deactivate-guard.service";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "products",
                component: ProductListComponent, // содержит <router-outlet>
                //canDeactivate: [CanDeactivateGuard],
                children: [
                    {
                        path: ":id",
                        component: ProductDetailsComponent
                    },
                    {
                        path: "",
                        component: ProductDetailsComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }
