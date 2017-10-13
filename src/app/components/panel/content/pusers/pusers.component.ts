import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { User } from './pusers.model';

@Component({
  selector: 'app-pusers',
  templateUrl: './pusers.component.html',
  styleUrls: ['./pusers.component.scss']
})
export class PusersComponent implements OnInit {

  constructor(private userService: UserService,
              public router: Router,
              public auth: AuthService) { }

  public users: User[] = [];

  ngOnInit() {
    this.userService.getUsers().subscribe( res => {
      res.forEach(user => {
        this.users.push({
          username: user.username,
          email: user.email,
          created: user.created,
          services: user.services,
          password: undefined,
          _id: user._id
        });
      });
    });
  }

  deleteUser(user: User, i: number) {
    this.userService.deleteUser(user).subscribe(res => {
      if (res.status === 200) {
        this.users.splice(i, 1);
      }
    });
  }

}
