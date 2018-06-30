import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard.component';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    NgxDatatableModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LeaderboardComponent}
    ])
  ],
  declarations: [LeaderboardComponent]
})
export class LeaderboardModule { }
