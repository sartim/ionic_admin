import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';

import { AuthenticationService } from '../_services/index';


@Component({
    templateUrl: 'home.component.html',
    styles: []
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  files: File[] = [];

  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser) {
      console.log(JSON.stringify(this.currentUser.user.username));
    } else {
      location.reload();
    }
  }

  ngOnInit() {
    this.authenticationService.getNewToken(); // To get new token
  }
}
