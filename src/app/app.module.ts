import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexedDbService } from './services/indexed-db.service';
import { AddPasswordModalComponent } from './add-password-modal/add-password-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPasswordModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [IndexedDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
