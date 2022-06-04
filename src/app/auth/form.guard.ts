import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from '../admin/components/adduser/adduser.component';
import { Formstate } from '../admin/interface/formstate';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<Formstate> {
  canDeactivate(
    component: Formstate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (!component.isDataSaved()) {
      if (confirm('Are you sure?')) {
        return true
      } else{
        return false
      }
    }
    return true
  }
  
}
