import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    {
      name: 'Harrison Gacheru',
      email: 'harrisgacheru@gmail.com'
    },
    {
      name: 'Lillian Wanjiku',
      email: 'lillian@gmail.com'
    }
  ]

  constructor() { }

  addUsers(user: User): void{
    this.users.push(user)
  }

  getUsers(): User[]{
    return this.users
  }
}
