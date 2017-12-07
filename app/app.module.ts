import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms"; // для ngModel

import { AppComponent } from './app.component';
import { ProductModule } from './components/product/product.module';
import { ControlsModule } from './controls/controls.module';
import { HomeModule } from './components/home/home.module';
import { ProductListComponent } from './components/product/index';
import { AppRoutingModule } from './app-routing.module'
import { AppUserModule } from './app-user/app-user.module';
import { AuthGuard } from './services/auth-guard.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { AuthService } from './services/auth.service';
  
@NgModule({
  imports: [
    AppUserModule,
    HomeModule,
    ProductModule,
    ControlsModule,
    FormsModule,    
    BrowserModule,
    AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers:[AuthGuard, CategoryService, ProductService, AuthService] 
})

export class AppModule { } 
