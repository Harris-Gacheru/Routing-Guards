import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdduserComponent } from '../admin/components/adduser/adduser.component';

@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<AdduserComponent> {
  canDeactivate(
    component: AdduserComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    console.log('Working...')
    return true;
  }
  
}
