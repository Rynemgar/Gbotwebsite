import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  template: `
    <div class="body">
      <h3 class="header">
        Overall Stats
      </h3>
      <ngx-datatable
        class="material"
        [rows]="stats"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="40"
        [summaryRow]="true"
        [footerHeight]="40"
        [limit]="10"
        [rowHeight]="'auto'"
        [reorderable]="reorderable">
      </ngx-datatable>
    </div>
  `
})
export class StatsComponent implements OnInit {

  stats = [];
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'Username', summaryFunc: () => null },
    { name: 'Level', summaryFunc: () => null },
    { name: 'Wins', summaryFunc: () => null },
    { name: 'Losses', summaryFunc: () => null },
    { name: 'Overall Wins', summaryFunc: () => null },
    { name: 'Overall Losses', summaryFunc: () => null },
    { name: 'Potions', summaryFunc: () => null }
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
