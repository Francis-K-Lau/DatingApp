import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AltertifyService } from '../_services/altertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AltertifyService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      //console.log('Logged in successfully');
      this.alertify.success('Logged in successfully');
    }, error => {
//      console.log('Failed to login');
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    }
    );
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // /// !! means if token is not null return true otherwise false
    // return !!token;
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
