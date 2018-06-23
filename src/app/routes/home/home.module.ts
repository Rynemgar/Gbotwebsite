import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FeatureBoxComponent } from './feature-box/feature-box.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ],
  declarations: [HomeComponent, FeatureBoxComponent]
})
export class HomeModule { }
