import { Injectable } from "@angular/core";
import * as zango from "zangodb";
import { ServiceDetails } from "../models/service-details";

@Injectable()
export class IndexedDbService {
  private db: zango.Db;
  private passwordsCollection: zango.Collection;
  private authCollection: zango.Collection;
  constructor() {
    this.db = new zango.Db("crypto-pass", 2, {
      passwords: ["service"],
      auth: ["hash"]
    });
    this.passwordsCollection = this.db.collection("passwords");
    this.authCollection = this.db.collection("auth");
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
 
  async getHash() {
    let authInfo = await this.authCollection.findOne({ _id: 1 });

    return authInfo ? authInfo["hash"] : null;
  }
  addHash(hash: string): Promise<any> {
    return this.authCollection.insert({
      hash
    });
  }
}
