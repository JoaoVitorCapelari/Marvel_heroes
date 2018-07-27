import { Component, OnInit } from '@angular/core';
import { Hero } from '../table/hero.model'
import { heroService } from '../table/hero.service';
import { ActivatedRoute, ParamMap } from '../../../node_modules/@angular/router';
import { switchMap } from '../../../node_modules/rxjs/operators';
import { ErrorHandler } from '../app.error-handler';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private heroService: heroService, private route: ActivatedRoute) { }

  ngOnInit() {

  //   this.heroService.getHeroById(this.route.snapshot.params['id'])
  //     .subscribe(data => this.hero = data)
  // }

    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => this.heroService.getHeroById(+params.get('id')))
    )
    .catch(ErrorHandler.handleError)
    .subscribe(
      data => this.hero = data
    );

  }

}


/* ActivatedRoute é um obejto que fornce qual foi a URL acionado e quais os parametros que foram passados para a URL. Preciso dos parametros
para saber o ID do heroi para poder passar pro meu serviço e a consulta ser feita no momento do subscribe 
Existem duas maneiras de acessar: pelo snapshot (foto do momento do meu acesso de como está o estado dos meus parametros) ou pelo subscribe
*/

/* operador + converte uma string para número */