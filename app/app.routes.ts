import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductListComponent, ProductDetailsComponent } from "./components/product/index";

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "products",
        component: ProductListComponent
    },
    {
        path: "product/:id",
        component: ProductDetailsComponent
    }
];