import { Injectable } from '@angular/core';
import * as zango from 'zangodb';
@Injectable()
export class IndexedDbService {
  private db: zango.Db;
  private passwordsCollection: zango.Collection;
  private keyCollection: zango.Collection;
  
  constructor() {
  this.db = new zango.Db('mydb', 2, { passwords: ['service'], key: ['secret'] });
  this.passwordsCollection= this.db.collection('passwords');
  
  this.keyCollection = this.db.collection('key');
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
  async getSecretKey(): Promise<string>{
    let key = await this.keyCollection.findOne({});
    return key ? key['secret']: key;
  }
  addSecretKey(secret: string): Promise<any>{
    return this.keyCollection.insert({
      secret
    })
  }
}
