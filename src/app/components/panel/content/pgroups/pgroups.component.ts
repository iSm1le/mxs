import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgroups',
  templateUrl: './pgroups.component.html',
  styleUrls: ['./pgroups.component.scss']
})
export class PgroupsComponent implements OnInit {

  /* TODO:
   1) Edit/remove/add functionality
   2) Group permission system?
   3) Add api routes
   4) Add groups to users
   5) Group model
   */

  groups = [
    {
      visibleName: 'Admin',
      service: 'Main',
      accessLevel: 5
    },
    {
      visibleName: 'User',
      service: 'Main',
      accessLevel: 1
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  deleteGroup(group, i) {
  }

}
