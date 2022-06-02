import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'adduser', component: AdduserComponent},
    {path: 'addproduct', component: AddproductsComponent},
    {path: 'showproducts', component: ShowproductsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
