import {Component, OnInit} from '@angular/core';
import {QueriesService} from '../services/queries.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-factorio-panel',
  templateUrl: './factorio-panel.component.html',
  styleUrls: ['./factorio-panel.component.css']
})
export class FactorioPanelComponent implements OnInit {

  factorioSaves = [];
  data = {
    creationSelect: 'default'
  };

  constructor(private queriesService: QueriesService) {
  }

  ngOnInit() {
    this.getFactorioSaves();
    // this.data.creationSelect = 'default';
  }

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
    this.queriesService.stopFactorio().subscribe((value) => {
      console.log(value);
    });
  }

  restartFactorio(name: string, event) {
    this.queriesService.restartFactorio(name).subscribe((value) => {
      console.log(value);
    });
  }
}
