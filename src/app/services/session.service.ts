import { QueriesService } from './queries.service';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {JwtService} from './jwt.service';
import {User} from '../models/user';
import { Router } from '@angular/router';

@Injectable()
export class SessionService {

  static user: User = null;  // new User('USER', 'USER@gmail.com')
  static isConnected = false;

  static loginSource = new Subject<any>();
  static logoutSource = new Subject<any>();

  static hasLogin = SessionService.loginSource.asObservable();
  static hasLogout = SessionService.loginSource.asObservable();

  constructor(private queriesService: QueriesService, private router: Router) { }

  static logout() {
    JwtService.delete();
    SessionService.user = null;
    SessionService.isConnected = true;
    SessionService.logoutSource.next();
  }

  static login(session) {
    JwtService.set(session.jwt);
    SessionService.user = new User(session.username, session.email);
    SessionService.isConnected = true;
    SessionService.loginSource.next();
  }

  isConnected(): Observable<boolean> {
    const connection = this.queriesService.isConnected(JwtService.get());
    connection.subscribe(isConnected => {
      if (!isConnected) {
        JwtService.delete();
        this.router.navigate(['/login']);
      } else if (!SessionService.user) {
        this.queriesService.getCurrentUser().subscribe(user => {
          SessionService.user = new User(user.username, user.email);
        });
      }
      SessionService.isConnected = isConnected;
      console.log(isConnected ? 'Connected' : 'Disconnected');
    });
    return connection;
  }

  login(username, password, nextRoute?) {
    this.queriesService.login({username: username, password: password}).subscribe(value => {
      SessionService.login(value);
      if (nextRoute) {
        this.router.navigate([nextRoute]);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  logout() {
    this.queriesService.logout().subscribe(() => {
      SessionService.logout();
      SessionService.isConnected = false;
      this.router.navigate(['/login']);
    });
  }
}
