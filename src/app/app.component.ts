import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { IndexedDbService } from './services/indexed-db.service';
import { AddPasswordModalComponent } from './add-password-modal/add-password-modal.component';

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
}
