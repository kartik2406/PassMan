import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login-register",
  templateUrl: "./login-register.component.html",
  styleUrls: ["./login-register.component.scss"]
})
export class LoginRegisterComponent implements OnInit {
  displayForm: boolean;
  login: boolean;
  password: string;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isRegistered.subscribe(val => {});
    this.authService
      .checkIfRegisterd()
      .then(val => {
        console.log(val);
        this.login = val ? true : false;
        this.displayForm = true;
      })
      .catch(err => {
        console.log(err);
        this.login = false;
        this.displayForm = true;
      });
  }
  loginRegister() {
    if (this.login) {
      //this.authService.login()
    } else {
      this.authService.register(this.password).then(res => {
        console.log(res);
      });
    }
  }
}
