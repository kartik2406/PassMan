import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexedDbService } from './services/indexed-db.service';
import { AddPasswordModalComponent } from './add-password-modal/add-password-modal.component';
import { CryptoService } from './services/crypto.service';


@NgModule({
  declarations: [
    AppComponent,
    AddPasswordModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    IndexedDbService,
    CryptoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
