import { Injectable } from '@angular/core';
import * as zango from 'zangodb';
@Injectable()
export class IndexedDbService {
  private db: zango.Db;
  private passwordsCollection: zango.Collection;
  constructor() {
  this.db = new zango.Db('mydb', 1, { passwords: ['service'] });
  this.passwordsCollection= this.db.collection('passwords');
  this.getAll().then();
  }
  getAll(): Promise<any>{
    return this.passwordsCollection.find({}).toArray();
  }
  addPassword(service: string, username: string, password: string): Promise<any>{
    return this.passwordsCollection.insert({
      service,
      username,
      password
    })
  }
  getPasswords(){
    return this.passwordsCollection.find({}).toArray();
  }
}
