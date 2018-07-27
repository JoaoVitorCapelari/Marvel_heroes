import {Routes} from '@angular/router';
import { TableComponent } from './table/table.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const ROUTES: Routes = [
    {path: '', component: TableComponent},
    {path: 'hero-detail/:id', component: HeroDetailComponent},
]