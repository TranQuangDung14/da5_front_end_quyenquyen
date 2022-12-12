import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './home/component/index/index.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DetailComponent } from './home/component/detail/detail.component';
import { CartComponent } from './home/component/cart/cart.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const router_home:Routes=[
  {
  path:"",
  component: HomeComponent,
  children:[
    {
      path:"",
      component: IndexComponent,
    },
    {
      path:"san-pham/:id",
      component:DetailComponent,
    },
  ]
}
]

@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    // ReactiveFormsModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forChild(router_home),
    CarouselModule
  ]
})
export class UserModule { }
