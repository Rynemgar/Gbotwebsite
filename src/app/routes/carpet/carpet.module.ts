import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarpetComponent } from './carpet.component';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    NgxDatatableModule,
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CarpetComponent}
    ])
  ],
  declarations: [CarpetComponent]
})
export class CarpetModule { }
