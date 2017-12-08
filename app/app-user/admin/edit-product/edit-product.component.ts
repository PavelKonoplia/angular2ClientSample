import { Component, OnInit, OnChanges } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductModel } from "../../../models/product.model";
import { ProductService } from "../../../services/product.service";

@Component({
    moduleId: module.id,
    selector: "edit-product",
    templateUrl: "edit-product.component.html"
})
export class EditProductComponent {

    editName: string;
    editPrice: number;
    editCategory: string;
    product: ProductModel;
    dataLoaded:boolean;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private productService: ProductService) { }

    ngOnInit() {
        this.setProduct();   
    }

    // ngOnChanges() {
    //     this.setProduct();     
    // }
    
    setProduct() {
        this.activatedRoute.data.forEach((data: { product: ProductModel }) => {
            this.product = data.product;
            this.editName = data.product.name;
            this.editPrice = data.product.price;
            this.editCategory = data.product.category;
        });
        // this.activatedRoute.params.forEach((params: Params) => {
        //     let id = +params["id"];
        //     this.productService
        //         .getProduct(id)
        //         .then(result => this.product = result)
        // });
    }

    goToProductList() {
        let pId = this.product ? this.product.id : null;
        this.router.navigate(["../"], { relativeTo: this.activatedRoute });
    }

    save() {
        this.product.name = this.editName;
        this.product.price = this.editPrice;
        this.product.category = this.editCategory;
        this.productService.editProduct(this.product);
    }

    canDeactivate(): Promise<boolean> | boolean {
        if (!this.product) {
            return true;
        }
        if (this.product.name == this.editName && this.product.price == this.editPrice && this.product.category == this.editCategory) {
            return true;
        }
        return confirm("Changes didnt saved. Do you want to leave?");
    }
}