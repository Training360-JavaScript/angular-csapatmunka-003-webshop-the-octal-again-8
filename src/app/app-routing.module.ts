import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
//import { Cat01Component } from './page/cat01/cat01.component';
//import { Cat02Component } from './page/cat02/cat02.component';
import { CategoryComponent } from './page/category/category.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'category/:catId',
    component: CategoryComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  /*{
    path: 'cat01',
    component: Cat01Component,
  },
  {
    path: 'cat02',
    component: Cat02Component,
  },*/
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
