import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
//      console.log('Failed to login');
      console.log(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    /// !! means if token is not null return true otherwise false
    return !!token;
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}