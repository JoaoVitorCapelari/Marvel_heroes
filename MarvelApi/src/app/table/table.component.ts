import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private heroService: HeroService) {}

/* propriedade chamada hero do tipo Hero que é meu model que representa o dado do tipo hero, segundo a API.
    decorator @Input permite com que outros componentes possam passar o meu hero para
    o componente hero-detail e assim poder exibir os dados daquele herói */
  @Input() hero: Hero;


/* declarado aqui para usar o AsyncPipe que no html seria this.heroServices | async */
    //heroServices = this.heroService.getHeroes();
/* passando para o meu construtor inicializar o serviço */
  
  hero$ = this.heroService.heroes$;
  offset = 0;
  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event){
    if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight * 0.95)) {
      this.heroService.refresh$.next(null);
    }
  }
  
}

/* assignando a minha propriedade componente com o meu método que me retorna a lista de herois e uma promessa */

// this.heroService.getHeroes().then(heroes => {
//  this.heroes = heroes;
// });
/* Get lista de herois */
//  this.heroService.getHeroes()
//   .subscribe(data => {
//     this.heroes = data;
//   }, error => {console.log(error)});