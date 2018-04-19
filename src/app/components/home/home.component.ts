import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IndexedDbService } from "../../services/indexed-db.service";
import { AddPasswordModalComponent } from "../add-password-modal/add-password-modal.component";
import { CryptoService } from "../../services/crypto.service";
import { ServiceDetails } from "../../models/service-details";
import * as Rx from "rxjs";
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  serviceName: string;
  userName: string;
  password: string;
  credentials: Object[];
  @ViewChild(AddPasswordModalComponent) addComponent: AddPasswordModalComponent;
  constructor(
    private dbservice: IndexedDbService,
    private cryptoService: CryptoService,
    private cd: ChangeDetectorRef
  ) { }
  ngOnInit() {
    this.getCredentials();
  }
  openAddModal() {
    // this.dbservice.addPassword(this.serviceName, this.userName, this.password).then((data) => {
    //   alert('Password added');
    // })
    this.addComponent.show();
  }
  async openEditModal(credentails: ServiceDetails) {
    let secret = await this.dbservice.getSecretKey();
    let password = this.cryptoService.decrypt(credentails.password, secret);
    this.addComponent.show({
      _id: credentails._id,
      service: credentails.service,
      username: credentails.username,
      password
    });
  }
  getCredentials() {
    this.dbservice.getPasswords().then(res => {
      this.credentials = res;
      console.log("Password list", this.credentials);
      this.cd.detectChanges();
    });
  }
  copyPassword(event: Event, credentail: ServiceDetails) {
    console.log("copy clipboard");
    if (!credentail.plaintextPassword) return;

    const element = event.target as Element; // extract the target from event
    const cardNode =
      element.nodeName == "I"
        ? element.parentElement.parentElement.parentElement
        : element.parentElement.parentElement; //get the card node depending on if the element is I or it's parent DIV
    const passwwordNode = cardNode.querySelector(".plaintext-password"); //select the password node

    var range = document.createRange(); //using range you can select elements from the DOM
    range.selectNode(passwwordNode);
    window.getSelection().addRange(range); // add it to selection, so that the node gets selected
    document.execCommand("Copy"); //copy command
    window.getSelection().removeAllRanges(); //clear the selection
  }
  async savePassword(userDetails: ServiceDetails) {
    console.log(userDetails);
    let checkSecret = await this.dbservice.getSecretKey();
    let secret;
    if (checkSecret) {
      secret = checkSecret;
      console.log(secret);
    } else {
      secret = this.cryptoService.generateSecretKey();
      this.dbservice.addSecretKey(secret).then(res => console.log("Key added"));
    }
    this.dbservice
      .addPassword(
        userDetails.service,
        userDetails.username,
        this.cryptoService.encrypt(userDetails.password, secret)
      )
      .then(res => console.log("saved"));
    this.getCredentials();
  }
  async editPassword(userDetails: ServiceDetails[]) {
    let secret = await this.dbservice.getSecretKey();
    userDetails[1].password = this.cryptoService.encrypt(
      userDetails[1].password,
      secret
    );
    console.log("Editing ", userDetails);
    this.dbservice.editPassword(userDetails[0], userDetails[1]).then(res => {
      console.log("Edit reponse", res);
      this.getCredentials();
      this.cd.detectChanges();
    });
  }
  async revealPassword(credentails: ServiceDetails) {
    let secret = await this.dbservice.getSecretKey();
    console.log("secret key", secret);
    let palintextPassword = this.cryptoService.decrypt(
      credentails.password,
      secret
    );
    console.log("Your password is ", palintextPassword);
    credentails.plaintextPassword = palintextPassword;
    this.cd.detectChanges();
    Rx.Observable.timer(5000).subscribe(res => {
      console.log("time elapsed");
      credentails.plaintextPassword = "";
      this.cd.detectChanges();
    });
  }

  delete(credentail: ServiceDetails) {
    this.dbservice.deletePassword(credentail).then(res => {
      console.log("Delete res", res);
      this.getCredentials();
      this.cd.detectChanges();
    });
  }

}
