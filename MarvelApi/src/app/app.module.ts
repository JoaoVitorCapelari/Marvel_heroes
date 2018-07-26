import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { heroService } from './table/hero.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [heroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
