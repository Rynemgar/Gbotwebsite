import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    NgxDatatableModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', component: StatsComponent}
    ])
  ],
  declarations: [StatsComponent]
})
export class StatsModule { }
