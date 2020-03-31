import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboard = [];
  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'Area', summaryFunc: () => null },
    { prop: 'Name', summaryFunc: () => null },
    { prop: 'Sales', summaryFunc: () => null },
    { prop: 'Value', summaryFunc: () => null }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getLeaderboard()
      .subscribe((leaderboard: any[]) => {
        this.leaderboard = leaderboard;
        this.loadingIndicator = false;
      });
  }

}
