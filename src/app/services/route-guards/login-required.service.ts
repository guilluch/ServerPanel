import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { QueriesService } from '../queries.service';
import { Observable } from 'rxjs/';
import { JwtService } from '../jwt.service';

@Injectable()
export class LoginRequired implements CanActivate {
  constructor(private queriesService: QueriesService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.queriesService.isConnected(JwtService.get()).toPromise().then(value => {
      if (!value) {
        this.router.navigate(['/login']);
      }
      return value;
    });
  }
}
