import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";

import { ProductModel } from "../models/product.model";
import { ProductService } from "./product.service";

// Resolve - интерфейс указывает на то, что объект может быть поставщиком данных (data provider)
// Подобные объекты позволяют избедать проблемы связанной с тем что компонент уже отобразился пользователю а данные для компонента еще не доступны.
@Injectable()
export class EditProductResolve implements Resolve<ProductModel> {
    
    constructor(private productService: ProductService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Promise<ProductModel | boolean> {

        let id = +route.params["id"];

        return this.productService.getProduct(id).then(product => {
            if (product) {
                return product;
            } else { 
                this.router.navigate(["/manage-products"]);
                return false;
            }
        });
    }
}
