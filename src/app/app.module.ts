import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {GuestRequired} from './services/route-guards/guest-required.service';
import {LoginRequired} from './services/route-guards/login-required.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {SessionService} from './services/session.service';
import {QueriesService} from './services/queries.service';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ServerSelectorComponent } from './server-selector/server-selector.component';
import { TeamspeakPanelComponent } from './teamspeak-panel/teamspeak-panel.component';
import { FactorioPanelComponent } from './factorio-panel/factorio-panel.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [GuestRequired]},
  {path: 'admin', component: AdminComponent, canActivate: [LoginRequired]},
  {path: 'admin/teamspeak', component: TeamspeakPanelComponent, canActivate: [LoginRequired]},
  {path: 'admin/factorio', component: FactorioPanelComponent, canActivate: [LoginRequired]},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ServerSelectorComponent,
    TeamspeakPanelComponent,
    FactorioPanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true}
    ),
    HttpClientModule,
    FormsModule
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
