import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats = [];
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { name: 'Username', summaryFunc: () => null },
    { prop: 'Level', summaryFunc: () => null },
    { prop: 'Wins', summaryFunc: () => null },
    { prop: 'Losses', summaryFunc: () => null },
    { prop: 'OverallWins', summaryFunc: () => null },
    { prop: 'OverallLosses', summaryFunc: () => null },
    { prop: 'Potions', summaryFunc: () => null },
    { prop: 'Strength', summaryFunc: () => null },
    { prop: 'Defense', summaryFunc: () => null },
    { prop: 'Agility', summaryFunc: () => null }
  ];

  constructor(private apiService: ApiService) {
    this.fetch((stats) => {
      this.rows = stats;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://gbotapi.herokuapp.com/api/stats`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit() {
    this.apiService.getStats()
      .subscribe((stats: any[]) => {
        this.stats = stats;
      });
  }



}
