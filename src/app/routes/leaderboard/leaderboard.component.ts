import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  leaderboard = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getLeaderboard()
      .subscribe((leaderboard: any[]) => {
        this.leaderboard = leaderboard;
      });
  }

}
