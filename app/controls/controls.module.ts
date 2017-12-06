import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownComponent , NavBarComponent } from './index';
 
@NgModule({
    imports: [CommonModule],
    declarations: [
        DropdownComponent,NavBarComponent],
    exports: [
        DropdownComponent,NavBarComponent]
})
export class ControlsModule {

}