import { Component, OnInit } from '@angular/core';
import {QueriesService} from '../services/queries.service';
import {SessionService} from '../services/session.service';
import {Router} from '@angular/router';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [QueriesService]
})
export class LoginComponent implements OnInit {

  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();
    this.sessionService.login(username, password, '/chat');
  }
}
