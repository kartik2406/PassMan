import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginRegisterComponent } from '../../components/login-register/login-register.component';
import { HomeComponent } from '../../components/home/home.component';
import { AddPasswordModalComponent } from '../../components/add-password-modal/add-password-modal.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginRegisterComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {

}

export const routingComponents = [ AddPasswordModalComponent,
  LoginRegisterComponent,
  HomeComponent]