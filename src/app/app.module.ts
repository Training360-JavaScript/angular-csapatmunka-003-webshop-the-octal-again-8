import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
//import { Cat01Component } from './page/cat01/cat01.component';
//import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductCardComponent } from './common/product-card/product-card.component';
import { FeaturedPipe } from './pipe/featured.pipe';
import { PromotedPipe } from './pipe/promoted.pipe';
import { ProductListComponent } from './common/product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { CategoryComponent } from './page/category/category.component';
import { ProductCarouselComponent } from './common/product-carousel/product-carousel.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { TwoWayEditorComponent } from './common/two-way-editor/two-way-editor.component';
import { ProductCreateComponent } from './common/product-create/product-create.component';
import { NetworkInterceptorInterceptor } from './interceptors/network-interceptor.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    //Cat01Component,
    //Cat02Component,
    HomeComponent,
    ProductCardComponent,
    FeaturedPipe,
    PromotedPipe,
    ProductListComponent,
    FilterPipe,
    CategoryComponent,
    ProductCarouselComponent,
    AdminComponent,
    DataEditorComponent,
    TwoWayEditorComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptorInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
