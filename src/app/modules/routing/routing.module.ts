import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LoginRegisterComponent } from "../../components/login-register/login-register.component";
import { HomeComponent } from "../../components/home/home.component";
import { AddPasswordModalComponent } from "../../components/add-password-modal/add-password-modal.component";
import { AuthGuardService as AuthGuard } from "../../guards/auth-guard.service";
import {  LoggedinRedirectService as LoggedIn } from "../../guards/loggedin-redirect.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginRegisterComponent , canActivate: [LoggedIn]}
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule {}

export const routingComponents = [
  AddPasswordModalComponent,
  LoginRegisterComponent,
  HomeComponent
];
