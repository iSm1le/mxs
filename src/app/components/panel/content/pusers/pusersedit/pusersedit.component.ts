import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../../services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../pusers.model';

@Component({
  selector: 'app-pusersedit',
  templateUrl: './pusersedit.component.html',
  styleUrls: ['./pusersedit.component.scss']
})
export class PuserseditComponent implements OnInit, OnDestroy {

  private sub: any;
  public user: User = new User(null, null, null, null, null, null);

  editForm: FormGroup;
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
  password = new FormControl('', [Validators.minLength(6)]);

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.user._id = params.id;
    });
    this.editForm = this.formBuilder.group({
      email: this.email,
      username: this.username,
      password: this.password
    });
    this.userService.getUser(this.user).subscribe(res => {
      this.user = res;
      this.email.setValue(this.user.email);
      this.username.setValue(this.user.username);
    });
  }

  setClassEmail() {
    return { 'has-danger': !this.email.pristine && !this.email.valid };
  }

  setClassUsername() {
    return { 'has-danger': !this.username.pristine && !this.username.valid };
  }

  setClassPassword() {
    return { 'has-danger': !this.password.pristine && !this.password.valid };
  }

  editComplete() {
    const password = this.password.value ? this.password.value : undefined;
    const user: User = {
      _id: this.user._id,
      username: this.username.value,
      email: this.email.value,
      services: this.user.services,
      created: this.user.created,
      password: password
    };
    this.userService.editUser(user).subscribe(res => {
      if (res.status === 200) {
        this.router.navigate(['/panel/users']);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
