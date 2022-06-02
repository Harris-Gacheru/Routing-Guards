import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdduserComponent,
    AddproductsComponent,
    ShowproductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
