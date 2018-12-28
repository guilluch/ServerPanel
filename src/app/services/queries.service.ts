import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {User} from '../models/user';
import {JwtService} from './jwt.service';


@Injectable()
export class QueriesService {

  constructor(private http: HttpClient) {
  }

  isConnected(jwt): Observable<boolean> {
    const params = new HttpParams()
      .set('jwt', jwt);
    return this.http.get<boolean>('http://omegaserv.net/omega-social/controller/isConnected.php', {params});
  }

  signUp(user): Observable<any> {
    const params = new HttpParams()
      .set('username', user.username)
      .set('email', user.email)
      .set('password', user.password);
    return this.http.post<any>('http://omegaserv.net/omega-social/controller/signUp.php', params);
  }

  login(user): Observable<any> {
    const params = new HttpParams()
      .set('username', user.username)
      .set('password', user.password);
    return this.http.post<any>('http://omegaserv.net/omega-social/controller/login.php', params);
  }

  logout() {
    return this.http.get('http://omegaserv.net/omega-social/controller/logout.php');
  }

  getCurrentUser(): Observable<User> {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt);
    return this.http.get<User>('http://omegaserv.net/omega-social/controller/getCurrentUser.php', {params});
  }

  getUser(id): Observable<User> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get<User>('http://omegaserv.net/omega-social/controller/getUser.php', {params});
  }

  addUser(user: User) {
    const params = new HttpParams()
      .set('username', user.username)
      .set('email', user.email)
      .set('password', user.password);
    return this.http.post('http://omegaserv.net/omega-social/controller/addUser.php', params);
  }

  startTS() {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt);
    return this.http.get<any>('http://omegaserv.net/server-panel/controller/startTS.php', {params});
  }

  stopTS() {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt);
    return this.http.get<any>('http://omegaserv.net/server-panel/controller/stopTS.php', {params});
  }

  restartTS() {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt);
    return this.http.get<any>('http://omegaserv.net/server-panel/controller/restartTS.php', {params});
  }

  getFactorioSaves() {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt);
    return this.http.get<any>('http://omegaserv.net/server-panel/controller/getFactorioSaves.php', {params});
  }

  createFactorio(name: string) {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt)
      .set('name', name);
    return this.http.get<any>('http://omegaserv.net/server-panel/controller/createFactorio.php', {params});
  }

  deleteFactorio(name: string) {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt)
      .set('name', name);
    return this.http.get<any>('http://omegaserv.net/server-panel/controller/deleteFactorio.php', {params});
  }

  startFactorio(name: string) {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt)
      .set('name', name);
    return this.http.get<any>('http://omegaserv.net/server-panel/controller/startFactorio.php', {params});
  }

  stopFactorio() {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt);
    return this.http.get<any>('http://omegaserv.net/server-panel/controller/stopFactorio.php', {params});
  }

  restartFactorio(name: string) {
    const jwt = JwtService.get();
    const params = new HttpParams()
      .set('jwt', jwt)
      .set('name', name);
    return this.http.get<any>('http://omegaserv.net/server-panel/controller/restartFactorio.php', {params});
  }
}
