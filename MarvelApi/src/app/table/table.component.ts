import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero.model';
import { heroService } from './hero.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //propriedade chamada hero do tipo Hero que é meu model que representa o dado do tipo hero, segundo a API.
  //decorator @Input permite com que outros componentes possam passar o meu hero para o componente hero-detail e assim poder exibir os dados daquele herói
  @Input() hero: Hero

  heroes: Hero[];

  //passando para o meu construtor inicializar o serviço
  constructor(private heroService: heroService) {}

  ngOnInit() {
     //assignando a minha propriedade componente com o meu método que me
    //retorna uma lista de herois 
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }

}





