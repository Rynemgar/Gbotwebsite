import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  stats = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStats()
      .subscribe((stats: any[]) => {
        this.stats = stats;
      });
  }

}
