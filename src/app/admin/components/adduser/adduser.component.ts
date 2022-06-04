import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required]
  })

  msg: string = ''
  
  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {

  }

  submit(){
    this.msg = 'Added successfully'
    this.usersService.addUsers(this.userForm.value)

    setTimeout(() => {
      this.msg = ''
    }, 1000);
  }

}
