import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowusersComponent } from './components/showusers/showusers.component';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdduserComponent,
    AddproductsComponent,
    ShowproductsComponent,
    ShowusersComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
