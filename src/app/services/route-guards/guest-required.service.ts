import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { QueriesService } from '../queries.service';
import { Observable } from 'rxjs/';
import { SessionService } from '../session.service';
import {JwtService} from '../jwt.service';

@Injectable()
export class GuestRequired implements CanActivate {
  constructor(private queriesService: QueriesService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.queriesService.isConnected(JwtService.get()).toPromise().then(value => {
      if (value) {
        this.router.navigate(['/']);
      }
      return !value;
    });
  }
}
