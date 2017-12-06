import { Injectable } from "@angular/core";
import { ProductModel } from '../models/product.model';
import { CategoryService } from './category.service';

@Injectable() 
export class ProductService {

    products: ProductModel[] = [new ProductModel(1, "brick", 100, "construction"),
    new ProductModel(2, "scizers", 200, "garden"),
    new ProductModel(3, "sofa", 300, "house"),
    new ProductModel(4, "table", 400, "house"),
    new ProductModel(5, "shovel", 500, "garden"),
    new ProductModel(6, "hammer", 600, "construction"),
    new ProductModel(7, "rake", 700, "garden"),
    new ProductModel(8, "scizers for trees", 800, "garden"),
    new ProductModel(9, "blocks", 900, "construction"),
    new ProductModel(10, "water station", 1000, "garden")];

    getData() {
        return this.products;
    }    
}

