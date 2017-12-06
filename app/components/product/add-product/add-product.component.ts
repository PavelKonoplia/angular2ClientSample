import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { CategoryService } from '../../../services/category.service';

@Component({
    moduleId: module.id,
    selector: 'add-product',
    templateUrl: 'add-product.component.html',
    styleUrls: ['add-product.component.css']
})
export class AddProductComponent {

    @Input()
    categories: any;
    product: ProductModel = new ProductModel(undefined, undefined, undefined, undefined);
    invalid: boolean = false;
    @Output()
    productAdded: EventEmitter<ProductModel> = new EventEmitter();

    constructor(private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.categoryService // обращаемся к сервису
            .getData()   // получаем Promise 
            .then(result => this.categories = result); // как только Promise перейдет в состояние resolved результат его работы присваиваем свойству phrases
    }


    addProduct() {
        this.invalid = false;
        if (this.product.id && this.product.name && this.product.price && this.product.category) {
            this.productAdded.emit(this.product);
        } else {
            this.invalid = true;
        }
    }
}

