import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: StatsComponent}
    ])
  ],
  declarations: [StatsComponent]
})
export class StatsModule { }
