import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowusersComponent } from './components/showusers/showusers.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    AdduserComponent,
    AddproductsComponent,
    ShowproductsComponent,
    ShowusersComponent,
    InstructionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
