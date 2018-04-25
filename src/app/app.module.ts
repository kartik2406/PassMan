import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { IndexedDbService } from './services/indexed-db.service';
import { CryptoService } from './services/crypto.service';

import { RoutingModule, routingComponents } from './modules/routing/routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoggedinRedirectService } from './guards/loggedin-redirect.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [
    IndexedDbService,
    CryptoService,
    AuthService,
    AuthGuardService,
    LoggedinRedirectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }