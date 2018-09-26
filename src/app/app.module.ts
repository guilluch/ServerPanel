import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {GuestRequired} from './services/route-guards/guest-required.service';
import {LoginRequired} from './services/route-guards/login-required.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {SessionService} from './services/session.service';
import {QueriesService} from './services/queries.service';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent, canActivate: [LoginRequired]},
  {path: 'login', component: LoginComponent, canActivate: [GuestRequired]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true}
    ),
    HttpClientModule
  ],
  providers: [
    SessionService,
    QueriesService,
    GuestRequired,
    LoginRequired
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
