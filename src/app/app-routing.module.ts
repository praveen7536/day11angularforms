import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProductlistComponent} from './productlist/productlist.component';
import {ShowproductlistComponent} from './showproductlist/showproductlist.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "productlist",
    component: ProductlistComponent
  },
  {
    path: "showproductlist",
    component: ShowproductlistComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
