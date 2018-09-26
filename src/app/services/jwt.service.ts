import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  constructor() { }

  static get() {
    return localStorage.getItem('jwt');
  }

  static set(jwt) {
    localStorage.setItem('jwt', jwt);
  }

  static delete() {
    localStorage.removeItem('jwt');
  }
}
