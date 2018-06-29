import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AppBarComponent } from './app-bar/app-bar.component';
import { ApiService } from './shared/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxDatatableModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
