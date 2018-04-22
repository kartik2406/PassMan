import { Injectable, Output, EventEmitter } from "@angular/core";
import { IndexedDbService } from "./indexed-db.service";
import { CryptoService } from "./crypto.service";
import * as jwt from "jsrsasign";
import { JwtHelperService } from "@auth0/angular-jwt";
import * as Rx from "rxjs";
import { Router } from "@angular/router";

const LOCALSTORAGE_TOKEN_KEY = "auth-token";

@Injectable()
export class AuthService {
  @Output() isRegistered: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  jwtHelper = new JwtHelperService();
  constructor(
    private dbService: IndexedDbService,
    private cryptService: CryptoService,
    private router: Router
  ) {
  }
  getToken(): string {
    return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  }
  startLogoutTimer(){
    let exp = this.jwtHelper.getTokenExpirationDate(this.getToken()).getTime();
    let now = new Date().getTime();
    let logoutTime = exp - now;
    console.log("Time", logoutTime);
    Rx.Observable
    .timer(logoutTime)
    .subscribe(val =>{
      console.log('Session expired');
      this.removeToken();
      this.router.navigateByUrl('/login');
    })
  }
  removeToken() {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
  }
  isLoggedIn(): Boolean {
    return !this.jwtHelper.isTokenExpired(this.getToken());
  }
  checkIfRegisterd() {
    return this.dbService.getHash();
  }
  generateJWT() {
    // Header
    var oHeader = { alg: "HS256", typ: "JWT" };
    // Payload
    var oPayload: any = {};
    var tNow = jwt.jws.IntDate.get("now");
    var tEnd = jwt.jws.IntDate.get("now") + 60 * 5;
    oPayload.iss = window.location.hostname;
    oPayload.nbf = tNow;
    oPayload.iat = tNow;
    oPayload.exp = tEnd;
    // Sign JWT, password=616161
    var sHeader = JSON.stringify(oHeader);
    var sPayload = JSON.stringify(oPayload);
    var sJWT = jwt.jws.JWS.sign("HS256", sHeader, sPayload, "616161");
    return sJWT;
  }
  async login(password: string) {
    let hash = await this.cryptService.generateHash(password);
    let storedHash = await this.dbService.getHash();
    let key = await this.dbService.getSecretKey();
    if (!key) {
      key = await this.cryptService.generateKeys();
      this.dbService.addSecretKey(key);
    }
    return new Promise((resolve, reject) => {
      if (hash == storedHash) {
        let token = this.generateJWT();
        localStorage.setItem("auth-token", token);
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
