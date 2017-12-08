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
        private productService: ProductService) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; 
            this.productService
                .getProduct(id)  
                .then(result => this.product = result);  
        });
    }

    goToProductList() {
        this.router.navigate(["products"]); 
    }
}