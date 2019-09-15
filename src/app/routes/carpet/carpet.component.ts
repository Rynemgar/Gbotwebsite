import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-carpet',
  templateUrl: './carpet.component.html',
  styleUrls: ['./carpet.component.scss']
})
export class CarpetComponent implements OnInit {

  leaderboard = [];
  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { name: 'Range', summaryFunc: () => null },
    { prop: 'Colour', summaryFunc: () => null },
    { prop: 'Size', summaryFunc: () => null },
    { prop: 'Cost', summaryFunc: () => null }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCarpet()
      .subscribe((leaderboard: any[]) => {
        this.leaderboard = leaderboard;
        this.loadingIndicator = false;
      });
  }

}
