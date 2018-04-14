import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IndexedDbService } from './services/indexed-db.service';
import { AddPasswordModalComponent } from './add-password-modal/add-password-modal.component';
import { CryptoService } from './services/crypto.service';
import { ServiceDetails } from './models/service-details';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  serviceName: string;
  userName: string;
  password: string;
  credentials: Object[];
  @ViewChild(AddPasswordModalComponent) addComponent: AddPasswordModalComponent;
  constructor(
    private dbservice: IndexedDbService,
    private cryptoService: CryptoService,
    private cd: ChangeDetectorRef  
  ) {

  }
  ngOnInit() {
    this.getCredentials();
  }
  openAddModal() {
    // this.dbservice.addPassword(this.serviceName, this.userName, this.password).then((data) => {
    //   alert('Password added');
    // })
    this.addComponent.show();
  }
  getCredentials() {
    this.dbservice.getPasswords().then(res => {
      this.credentials = res;
      console.log('Password list', this.credentials);
      this.cd.detectChanges();
    });
  }
  copyPassword(event: Event){
    console.log('Copying')
    document.execCommand('Copy',false, 'This is the password');
  }
  async savePassword(userDetails: ServiceDetails){
    console.log(userDetails)
    let checkSecret = await this.dbservice.getSecretKey();
    let secret; 
    if(checkSecret){
      secret = checkSecret;
      console.log(secret);
    } else{
      secret = this.cryptoService.generateSecretKey();
      this.dbservice.addSecretKey(secret).then(res => console.log('Key added'))
    }
    this.dbservice
    .addPassword(
      userDetails.service, 
      userDetails.username, 
      this.cryptoService.encrypt(userDetails.password, secret))
    .then(res => console.log('saved'));
    this.getCredentials();
  }
  async revealPassword(credentails: ServiceDetails){
     let secret = await this.dbservice.getSecretKey();
     console.log('secret key', secret);
     let palintextPassword = this.cryptoService.decrypt(credentails.password, secret);
     console.log('Your password is ', palintextPassword);
     credentails.plaintextPassword = palintextPassword;
     this.cd.detectChanges();
     Rx.Observable.timer(5000).subscribe((res) =>{
       console.log('time elapsed');
       credentails.plaintextPassword = '';
       this.cd.detectChanges();
     });
  }

  delete(credentail: ServiceDetails){
    this.dbservice.deletePassword(credentail)
      .then(res =>{
        console.log('Delete res', res)
        this.getCredentials();
        this.cd.detectChanges();
      })
  }
}
