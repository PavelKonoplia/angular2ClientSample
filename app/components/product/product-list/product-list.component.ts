import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';
import { Router } from "@angular/router"

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent {

    @Input()
    rows: number;
    currentCategory: string = "All";
    products: any;
    categories: any;

    constructor(private productService: ProductService,
        private categoryService: CategoryService,
        private router: Router) {
    }

    cutTheRows() {
        this.rows ? this.rows : this.rows = this.products.length;
        this.products = this.products.slice(0, this.rows);
    }

    ngOnInit() {
        this.productService 
            .getAll()   
            .then(result => this.products = result); 

        this.categoryService 
            .getData()   
            .then(result => this.categories = result); 

        if(this.products){
            this.cutTheRows();
        }        
    }

    onSelect(selected: ProductModel) {
        this.router.navigate(["product", selected.id]);
    }

    delete(p: ProductModel) {
        var id = this.products.indexOf(p);
        if (id > -1) {
            this.products.splice(id, 1);
            console.log(p.id);
        }
    }

    productAdded(event: any) {
        event ? this.products = this.products.concat(event) : 0;
    }

    getClass(p: ProductModel): string {
        return p.price > 500 ? "red" : "myrow";
    }

    setCurrentCategory(target) {
        this.currentCategory = target;
    }

    thisCategory(p: ProductModel): boolean {
        return this.currentCategory == "All" ? true : (p.category == this.currentCategory ? true : false);
    }
} 