import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { IndexedDbService } from "../../services/indexed-db.service";
import { AddPasswordModalComponent } from "../add-password-modal/add-password-modal.component";
import { CryptoService } from "../../services/crypto.service";
import { ServiceDetails } from "../../models/service-details";
import * as Rx from "rxjs";
import { Observable } from "rxjs/Observable";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
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
  ) {}
  async ngOnInit() {
    this.getCredentials();
  }
  openAddModal() {
    // this.dbservice.addPassword(this.serviceName, this.userName, this.password).then((data) => {
    //   alert('Password added');
    // })
    this.addComponent.show();
  }
  async openEditModal(credentails: ServiceDetails) {
    let secret = this.cryptoService.getSecretKey();
    let password = await this.cryptoService.decrypt(
      credentails.password,
      secret
    );
    this.addComponent.show({
      _id: credentails._id,
      service: credentails.service,
      username: credentails.username,
      plaintextPassword: password
    });
  }
  getCredentials() {
    this.dbservice.getPasswords().then(res => {
      this.credentials = res;
      this.cd.detectChanges();
    });
  }
  copyPassword(event: Event, credentail: ServiceDetails) {
    if (!credentail.plaintextPassword) return;

    const element = event.target as Element; // extract the target from event
    const cardNode =
      element.nodeName == "I"
        ? element.parentElement.parentElement.parentElement
        : element.parentElement.parentElement; //get the card node depending on if the element is I or it's parent DIV
    const passwwordNode = cardNode.querySelector(".plaintext-password"); //select the password node

    var range = document.createRange(); //using range you can select elements from the DOM
    range.selectNode(passwwordNode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range); // add it to selection, so that the node gets selected
    document.execCommand("Copy"); //copy command
    window.getSelection().removeAllRanges(); //clear the selection
  }
  async savePassword(userDetails: ServiceDetails) {
    let secret = this.cryptoService.getSecretKey();
  
    let encData = await this.cryptoService.encrypt(
      userDetails.plaintextPassword,
      secret
    );

    this.dbservice
      .addPassword(userDetails.service, userDetails.username, encData)
      .then(res => console.log("saved", res));
    this.getCredentials();
  }
  async editPassword(userDetails: ServiceDetails[]) {
    let secret = await this.cryptoService.getSecretKey();
    userDetails[1].password = await this.cryptoService.encrypt(
      userDetails[1].plaintextPassword,
      secret
    );
    userDetails[1].plaintextPassword = null;
    this.dbservice.editPassword(userDetails[0], userDetails[1]).then(res => {
      this.getCredentials();
      this.cd.detectChanges();
    });
  }
  async revealPassword(credentails: ServiceDetails) {
    let secret =  this.cryptoService.getSecretKey();
  
    let palintextPassword = await this.cryptoService.decrypt(
      credentails.password,
      secret
    );
    credentails.plaintextPassword = palintextPassword;
    this.cd.detectChanges();
    Rx.Observable.timer(5000).subscribe(res => {
      credentails.plaintextPassword = "";
      this.cd.detectChanges();
    });
  }

  delete(credentail: ServiceDetails) {
    this.dbservice.deletePassword(credentail).then(res => {
      this.getCredentials();
      this.cd.detectChanges();
    });
  }
}
