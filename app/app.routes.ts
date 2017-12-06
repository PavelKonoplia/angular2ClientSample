import { Routes } from "@angular/router";
import { ProductListComponent } from "./components/product/index";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: ProductListComponent
    },
    {
        path: "products",
        component: ProductListComponent
    }
];