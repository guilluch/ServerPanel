import { Component, OnInit } from '@angular/core';
import {QueriesService} from '../services/queries.service';

@Component({
  selector: 'app-teamspeak-panel',
  templateUrl: './teamspeak-panel.component.html',
  styleUrls: ['./teamspeak-panel.component.css']
})
export class TeamspeakPanelComponent implements OnInit {

  constructor(private queriesService: QueriesService) { }

  ngOnInit() {
  }

  startTS(event) {
    this.queriesService.startTS().subscribe((value) => {
      console.log(value);
    });
  }

  stopTS(event) {
    this.queriesService.stopTS().subscribe((value) => {
      console.log(value);
    });
  }

  restartTS(event) {
    this.queriesService.restartTS().subscribe((value) => {
      console.log(value);
    });
  }
}
