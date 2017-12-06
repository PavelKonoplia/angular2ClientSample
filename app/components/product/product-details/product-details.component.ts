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

    // ActivatedRoute - содержит информацию о маршруте связанную с компонентом, который загружен в outlet
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ProductService) { }

    ngOnInit() {
        // params - параметры текущего маршрута. Данное свойство является Observable объектом
        // Если параметры будут изменены - произойдет событие и компонент узнает о изменениях.

        // OBSERVABLE PARAMS
        // forEach - устанавливаем обработчик на каждое изменение params
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number
            this.service
                .getProduct(id)  // обращаемся к сервису и запрашиваем фразу по id. Получаем Promise
                .then(result => this.product = result);  // как только Promise перейдет в состояние resolved присваиваем его значение свойству phrase
        });

        // SNAPSHOT
        // получение начального значения параметра id 
        /*let id = +this.activatedRoute.snapshot.params["id"];
        this.service
            .getPhrase(id)  
            .then(result => this.phrase = result); */ 
    }

    goToProductList() {
        this.router.navigate(["products"]); // перенаправляем пользователя на PhraseListComponent
    }
}