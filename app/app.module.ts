import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"; // для ngModel

import { AppComponent } from './app.component';
import { routes } from "./app.routes";
import { ProductModule } from './components/product/product.module';
import { ControlsModule } from './controls/controls.module';
import { HomeModule } from './components/home/home.module';
import { ProductListComponent } from './components/product/index';

@NgModule({
  imports: [
    HomeModule,
    ProductModule,
    ControlsModule,
    FormsModule,    
    BrowserModule,
    RouterModule.forRoot(routes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]  
})

export class AppModule { } 
