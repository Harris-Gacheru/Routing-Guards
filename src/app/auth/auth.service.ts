import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedin: boolean = false;

  constructor() { }

  login(){
    console.log('Logging in...')
    this.isLoggedin = true
  }

  logout(){
    console.log('Logging out...')
    this.isLoggedin = false
  }
}
