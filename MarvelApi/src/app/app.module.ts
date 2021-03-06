import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';


import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { HeroService } from './table/hero.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
