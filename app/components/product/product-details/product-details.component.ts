import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductModel } from "../../../models/product.model";
import { ProductService } from "../../../services/product.service";

@Component({
    moduleId: module.id,
    selector: "product-details",
    templateUrl: "product-details.component.html"
})
export class ProductDetailsComponent implements OnInit {

    product: ProductModel;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ProductService) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; 
            this.service
                .getProduct(id)  
                .then(result => this.product = result);  
        });

    }

    goToProductList() {
        this.router.navigate(["products"]); 
    }

    /*canDeactivate(): Promise<boolean> | boolean {
        if (!this.product) {
            return true;
        }
        if (this.product.name == this.editName && this.product.price == this.editPrice) {
            return true;
        }

        return confirm("Вы не сохранили изменения. Уйти со страницы?");
    }*/
}