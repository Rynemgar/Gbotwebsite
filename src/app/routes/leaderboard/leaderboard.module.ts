import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardComponent } from './leaderboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LeaderboardComponent}
    ])
  ],
  declarations: [LeaderboardComponent]
})
export class LeaderboardModule { }
