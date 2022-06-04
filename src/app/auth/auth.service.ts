import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin: boolean = false;

  constructor(private route: Router) { }

  login(){
    console.log('Logging in...')
    this.isLoggedin = true
  }

  logout(){
    console.log('Logging out...')
    this.isLoggedin = false
    this.route.navigate(['/'])
  }
}
