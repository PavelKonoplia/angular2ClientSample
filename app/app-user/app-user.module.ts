import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms"; // для ngModel

import { LoginComponent, AdminComponent } from "./index";
import { AppUserRoutingModule } from './app-user-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
         AppUserRoutingModule],
    // exports: [
    //     LoginComponent, AdminComponent],
    declarations: [
        LoginComponent, AdminComponent]
})
export class AppUserModule {

}