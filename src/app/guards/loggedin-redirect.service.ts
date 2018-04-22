import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedinRedirectService implements CanActivate{

  constructor(private auth : AuthService, private router: Router) { }

  canActivate() : boolean {
    console.log('Logged in guard');
    
    if(this.auth.isLoggedIn()){
      this.router.navigateByUrl('/home');
      return false;
    }

    return true;
  }
}
