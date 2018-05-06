import { Injectable, Output, EventEmitter } from "@angular/core";
import { IndexedDbService } from "./indexed-db.service";
import { CryptoService } from "./crypto.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import * as Rx from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AuthService {
  @Output() isRegistered: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  isLoggedInFlag: Boolean;
  constructor(
    private dbService: IndexedDbService,
    private cryptService: CryptoService,
    private router: Router
  ) {
  }
 
  
  startLogoutTimer(){
    let logoutTime = 300000; // 5 minutes
    console.log("Time", logoutTime);
    Rx.Observable
    .timer(logoutTime)
    .subscribe(val =>{
      this.isLoggedInFlag = false;
      this.router.navigateByUrl('/login');
    })
  }

  isLoggedIn(): Boolean {
    return this.isLoggedInFlag;
  }
  checkIfRegisterd() {
    return this.dbService.getHash();
  }

  async login(password: string) {
    let hash = await this.cryptService.generateHash(password);
    let storedHash = await this.dbService.getHash();
    await this.cryptService.generateKey(password);

    return new Promise((resolve, reject) => {
      if (hash == storedHash) {
      this.isLoggedInFlag = true;        
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  async register(password: string) {
    let hash = await this.cryptService.generateHash(password);
    return this.dbService.addHash(hash);
  }
}
