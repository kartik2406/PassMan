import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { CryptoService } from "../../services/crypto.service";

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
  constructor(
    private authService: AuthService,
     private router: Router,
     private crypto: CryptoService
    ) {}

  ngOnInit() {
    this.authService.isRegistered.subscribe(val => {});
    this.authService
      .checkIfRegisterd()
      .then(val => {
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
        this.router.navigateByUrl("/home");
      }).catch(err => {
        console.log(err);
        
      });
    } else {
      this.authService.register(this.password).then(res => {
        this.login = true;
        this.loginRegister();
        //Todo: Popup
      });
    }
  
  }
  checkEnter(event: KeyboardEvent){
    if(event.keyCode == 13){
      this.loginRegister();
    }
  }
  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
    
  }
}
