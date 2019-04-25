import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {QueriesService} from '../services/queries.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  factorioSaves = [];
  data = {
    creationSelect: 'default'
  };

  constructor(private queriesService: QueriesService) { }

  ngOnInit() {
    this.getFactorioSaves();
  }


  // TEAMSPEAK

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


  // FACTORIO

  getFactorioSaves() {
    this.queriesService.getFactorioSaves().subscribe((value) => {
      console.log(value);
      this.factorioSaves = value;
    });
  }

  createFactorio(name: string) {
    this.factorioSaves.push(name);
  }

  deleteFactorio(name: string) {
  }

  startFactorio(name: NgForm, event) {
    // event.preventDefault();
    console.log(name.value);
    /*this.queriesService.startFactorio(name).subscribe((value) => {
      console.log(value);
    });*/
  }

  stopFactorio(event) {
    /*this.queriesService.stopFactorio().subscribe((value) => {
      console.log(value);
    });*/
  }

  restartFactorio(name: string, event) {
    this.queriesService.restartFactorio(name).subscribe((value) => {
      console.log(value);
    });
  }
}
