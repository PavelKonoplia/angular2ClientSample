"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("../../../services/product.service");
var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(router, activatedRoute, productService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.setProduct();
    };
    // ngOnChanges() {
    //     this.setProduct();     
    // }
    EditProductComponent.prototype.setProduct = function () {
        var _this = this;
        this.activatedRoute.data.forEach(function (data) {
            _this.product = data.product;
            _this.editName = data.product.name;
            _this.editPrice = data.product.price;
            _this.editCategory = data.product.category;
        });
        // this.activatedRoute.params.forEach((params: Params) => {
        //     let id = +params["id"];
        //     this.productService
        //         .getProduct(id)
        //         .then(result => this.product = result)
        // });
    };
    EditProductComponent.prototype.goToProductList = function () {
        var pId = this.product ? this.product.id : null;
        this.router.navigate(["../"], { relativeTo: this.activatedRoute });
    };
    EditProductComponent.prototype.save = function () {
        this.product.name = this.editName;
        this.product.price = this.editPrice;
        this.product.category = this.editCategory;
        this.productService.editProduct(this.product);
    };
    EditProductComponent.prototype.canDeactivate = function () {
        if (!this.product) {
            return true;
        }
        if (this.product.name == this.editName && this.product.price == this.editPrice && this.product.category == this.editCategory) {
            return true;
        }
        return confirm("Changes didnt saved. Do you want to leave?");
    };
    EditProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "edit-product",
            templateUrl: "edit-product.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            product_service_1.ProductService])
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=edit-product.component.js.map