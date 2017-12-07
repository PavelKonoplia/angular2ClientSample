import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"; // для ngModel

import { ProductListComponent, AddProductComponent, ProductDetailsComponent} from "./index";
import { DropdownComponent } from '../../controls/dropdown/dropdown.component';
import { ControlsModule } from '../../controls/controls.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ControlsModule,
        FormsModule,
        ProductRoutingModule],
    // exports: [
    //     ProductListComponent,AddProductComponent,ProductDetailsComponent],
    declarations: [
        ProductListComponent,AddProductComponent,ProductDetailsComponent]
})
export class ProductModule {

}