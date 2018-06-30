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
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { name: 'Username', summaryFunc: () => null },
    { prop: 'Level', summaryFunc: () => null },
    { prop: 'Wins', summaryFunc: () => null },
    { prop: 'Losses', summaryFunc: () => null }
  ];

  constructor(private apiService: ApiService) { 
    this.fetch((leaderboard) => {
      this.rows = leaderboard;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://gbotapi.herokuapp.com/api/levels`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit() {
    this.apiService.getLeaderboard()
      .subscribe((leaderboard: any[]) => {
        this.leaderboard = leaderboard;
      });
  }

}
