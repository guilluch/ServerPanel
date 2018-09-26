import {Component, OnInit} from '@angular/core';
import {SessionService} from './services/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private sessionService: SessionService, private router: Router) {

  }

  ngOnInit() {
    this.sessionService.isConnected();
  }

  isConnected() {
    return SessionService.isConnected;
  }

  logout() {
    this.sessionService.logout();
  }
}
