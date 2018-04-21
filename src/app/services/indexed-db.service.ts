import { Injectable } from "@angular/core";
import * as zango from "zangodb";
import { ServiceDetails } from "../models/service-details";
import { KeyPair } from "../models/key-pair";
@Injectable()
export class IndexedDbService {
  private db: zango.Db;
  private passwordsCollection: zango.Collection;
  private keyCollection: zango.Collection;

  constructor() {
    this.db = new zango.Db("mydb", 2, {
      passwords: ["service"],
      key: ["secret"]
    });
    this.passwordsCollection = this.db.collection("passwords");

    this.keyCollection = this.db.collection("key");
    this.getAll().then();
  }
  getAll(): Promise<any> {
    return this.passwordsCollection.find({}).toArray();
  }
  addPassword(
    service: string,
    username: string,
    password: ArrayBuffer
  ): Promise<any> {
    return this.passwordsCollection.insert({
      service,
      username,
      password
    });
  }
  getPasswords() {
    return this.passwordsCollection.find({}).toArray();
  }
  editPassword(credetials: ServiceDetails, newCredentials: ServiceDetails) {
    return this.passwordsCollection.update(
      { _id: credetials._id },
      {
        service: newCredentials.service,
        username: newCredentials.username,
        password: newCredentials.password
      }
    );
  }
  deletePassword(credetials: ServiceDetails) {
    return this.passwordsCollection.remove(credetials);
  }
  /* Key releated code */
  async getSecretKey() {
    let key: KeyPair = <KeyPair>await this.keyCollection.findOne({ "_id": 1 });
    return key ? key['secret'] : null;
  }
  addSecretKey(secret: string): Promise<any> {
    return this.keyCollection.insert({
      secret
    });
  }
}
