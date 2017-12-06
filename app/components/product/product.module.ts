import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"; // для ngModel

import { ProductListComponent, AddProductComponent, ProductDetailsComponent} from "./index";
import { DropdownComponent } from '../../controls/dropdown/dropdown.component';
import { ControlsModule } from '../../controls/controls.module';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@NgModule({
    imports: [
        CommonModule,
        ControlsModule,
        FormsModule],
    exports: [
        ProductListComponent,AddProductComponent,ProductDetailsComponent],
    declarations: [
        ProductListComponent,AddProductComponent,ProductDetailsComponent],
        providers: [CategoryService,ProductService] 
})
export class ProductModule {

}