import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"; // для ngModel

import { AppComponent }   from './app.component';
import { routes } from "./app.routes";
import { ProductModule } from './components/product/product.module';
import { ControlsModule } from './controls/controls.module';
import {ProductListComponent} from './components/product/index';

@NgModule({
  imports:      [ 
    BrowserModule,
    ProductModule,
    ControlsModule,
    FormsModule,
    RouterModule.forRoot(routes)],
  declarations: [ AppComponent ], // корневой компонент данного приложения
  bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { } 
