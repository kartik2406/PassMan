import { Injectable, Output,EventEmitter } from '@angular/core';
import { IndexedDbService } from './indexed-db.service';
import { CryptoService } from './crypto.service';

@Injectable()
export class AuthService {
  isLoggedIn: Boolean;
  @Output() isRegistered: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor(
    private dbService: IndexedDbService,
    private cryptService: CryptoService
  ) { }

  checkIfLoggedIn(){
    return this.isLoggedIn;
  }
  checkIfRegisterd(){
    return this.dbService.getHash();
  }
  login(password: string){

  }

  async register(password: string){
      let hash = await this.cryptService.generateHash(password);
      return this.dbService.addHash(hash);
  }
}
