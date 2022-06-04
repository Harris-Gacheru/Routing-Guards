import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Formstate } from '../../interface/formstate';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit, Formstate {
  Form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required]
  })

  msg: string = ''
  
  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {

  }

  submit(){
    this.msg = 'Added successfully'
    this.usersService.addUsers(this.Form.value)

    setTimeout(() => {
      this.msg = ''
    }, 1000);
  }  

  isDataSaved(): boolean {
    return !this.Form.dirty
  }
}
