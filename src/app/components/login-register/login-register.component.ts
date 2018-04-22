import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-register",
  templateUrl: "./login-register.component.html",
  styleUrls: ["./login-register.component.scss"]
})
export class LoginRegisterComponent implements OnInit {
  displayForm: boolean;
  login: boolean;
  password: string;
  showPassword: boolean = false;
  constructor(private authService: AuthService, private router: Router) {}

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
      this.authService.login(this.password).then(res => {
        console.log(res);
        this.router.navigateByUrl("/home");
      }).catch(err => {
        console.log(err);
        
      });
    } else {
      this.authService.register(this.password).then(res => {
        console.log("Logged in successfully!");
        this.login = true;
        this.loginRegister();
        //Todo: Popup
       
      });
    }
  }
  checkEnter(event: KeyboardEvent){
    if(event.keyCode == 13){
      //console.log('enter clicked');
      this.loginRegister();
    }
  }
  togglePasswordVisibility(){
    console.log('toggl');
    this.showPassword = !this.showPassword;
    console.log(this.showPassword);
    
  }
}
