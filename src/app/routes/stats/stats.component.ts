import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  stats = [];
  loadingIndicator = true;
  reorderable = true;

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

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadingIndicator = true;
    this.apiService.getStats()
      .subscribe((stats: any[]) => {
        this.stats = stats;
        this.loadingIndicator = false;
      });
  }



}
