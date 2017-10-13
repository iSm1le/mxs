import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../../../services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../pusers.model';

@Component({
  selector: 'app-pusersadd',
  templateUrl: './pusersadd.component.html',
  styleUrls: ['./pusersadd.component.scss']
})
export class PusersaddComponent implements OnInit {

  public user: User = new User(null, null, null, null, null, null);

  addUserForm: FormGroup;
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20)
  ]);
  groups = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
    ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private router: Router,
              private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      email: this.email,
      username: this.username,
      groups: this.groups,
      password: this.password
    });
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }

  setClassGroups() {
    return { 'has-danger': !this.groups.pristine && !this.groups.valid };
  }

  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  addUserComplete() {
    const user: User = {
      _id: undefined,
      username: this.username.value,
      email: this.email.value,
      services: this.groups.value,
      created: new Date,
      password: this.password.value
    };
    this.userService.addUser(user).subscribe(res => {
      if (res.status === 200) {
        this.router.navigate(['/panel/users']);
      }
    });
  }

}
