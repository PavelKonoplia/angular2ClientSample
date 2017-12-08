import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"; // для ngModel

import { LoginComponent, ManageProductsComponent, EditProductComponent } from "./index";
import { AppUserRoutingModule } from './app-user-routing.module';
import { ProductModule } from '../components/product/product.module';
import { ProductListComponent } from '../components/product/product-list/product-list.component';

@NgModule({
    imports: [
        ProductModule,
        CommonModule,
        FormsModule,
        AppUserRoutingModule],
    declarations: [
        LoginComponent, ManageProductsComponent, EditProductComponent]
})
export class AppUserModule {

}