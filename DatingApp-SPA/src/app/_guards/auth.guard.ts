import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AltertifyService } from '../_services/altertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private altertify: AltertifyService) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
    this.altertify.error('You shall not pass!!!');
    this.router.navigate(['/home']);
    return false;
  }
  
}