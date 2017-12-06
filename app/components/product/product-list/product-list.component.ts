import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { AddProductComponent } from '../add-product/add-product.component';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from '../../../services/category.service';

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

    constructor(private productService: ProductService, private categoryService: CategoryService) {
        this.products = productService.getData();
        this.categories = categoryService.getData();
    }

    ngOnInit() {
        this.rows ? this.rows : this.rows = this.products.length;
        this.products = this.products.slice(0, this.rows);
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