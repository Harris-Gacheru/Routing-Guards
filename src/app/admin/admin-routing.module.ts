import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGuard } from '../auth/form.guard';
import { AdminComponent } from './admin/admin.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { ShowusersComponent } from './components/showusers/showusers.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: '', component: InstructionComponent},
    {path: 'adduser', component: AdduserComponent, canDeactivate: [FormGuard]},
    {path: 'addproduct', component: AddproductsComponent, canDeactivate: [FormGuard]},
    {path: 'showproducts', component: ShowproductsComponent},
    {path: 'showusers', component: ShowusersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
