import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    try {
      if (!this.auth.isLoggedIn()) {
        this.router.navigate(["login"]);
        return false;
      }
    } catch (err) {
      console.log(err);
      this.router.navigate(["login"]);
      return false;
    }
    this.auth.startLogoutTimer();
    return true;
  }
}
