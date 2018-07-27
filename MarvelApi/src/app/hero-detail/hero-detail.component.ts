import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Hero } from '../table/hero.model'

import { switchMap } from 'rxjs/operators';
import { heroService } from '../table/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private heroService: heroService) { }

  heroes: Hero[];

  ngOnInit() {

    /* Get heroi especifico */
      this.heroes = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.heroService.getHeroes(params.get('id')))
  );
  console.log("esse é o do detail: ", this.hero);
}

}
