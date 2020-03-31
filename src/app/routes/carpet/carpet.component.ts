import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-carpet',
  templateUrl: './carpet.component.html',
  styleUrls: ['./carpet.component.scss']
})
export class CarpetComponent implements OnInit {

  carpet = [];
  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'ID', summaryFunc: () => null },
    { prop: 'Range', summaryFunc: () => null },
    { prop: 'Colour', summaryFunc: () => null },
    { prop: 'Size', summaryFunc: () => null },
    { prop: 'Cost', summaryFunc: () => null },
    { prop: 'Value', summaryFunc: () => null }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCarpet()
      .subscribe((carpet: any[]) => {
        this.carpet = carpet;
        this.loadingIndicator = false;
      });
  }

}
