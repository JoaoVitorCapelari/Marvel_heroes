import { Hero } from './hero.model';
import { MARVEL_API, apiKeyHashTs } from '../app.api';
import { Injectable, Output } from '@angular/core';
import { Http } from '@angular/http';
import { tap, share, exhaustMap, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


/* para uma classe de serviço receber um outro serviço via injeção de dependencia precisa marca-la com o decorator @injectable */
@Injectable()
export class HeroService {

    constructor(private http: Http) {}

    cache: Hero[] = [];
    @Output()
    loading: boolean = false;

    offset = -20;
    refresh$: BehaviorSubject<Hero[]> = new BehaviorSubject([]);
    heroes$: Observable<Hero[]> = this.refresh$.pipe(
        exhaustMap(() => this.getHeroes())
    );
    
    getHeroes(): Observable<Hero[]> {
        this.offset += 20;
        return this.http.get(`${MARVEL_API}?offset=${this.offset}&${apiKeyHashTs}`)
        .pipe(
                      map(response => response.json().data.results as Hero[]),
                      tap((h) => this.cache = this.cache.concat(h)),
                      map(() => this.cache),
                     share(),
                    );
                }

    getHeroById(id: number): Observable<Hero>{
        return this.http.get(`${MARVEL_API}/${id}?${apiKeyHashTs}`)
        .pipe(
            map(response => response.json().data.results[0] as Hero),
            tap(y => console.log(y))
        );
    }
    
}
            
/* Utilizando promises ao invés de Observable */

//getHeroes(): Promise<Hero[]> {
//  return Promise.resolve(this.heroes);
//}

/*Utilizando o serviço http com get
o tipo Observable response não é compativel com o tipo response array de Hero, por isso preciso
mapear e converter para o tipo json, utilizando o operador map, toda requisição feita vai retornar 
um tipo response que representa a resposta crua, mas preciso do obejto json.
A chamada http ainda não foi feita, vai ser feita quando eu fizer o subscribe no componente 
pipe(tap( x => console.log(x))) funciona como um subscribe, mas ele não completa, somente simula uma subscription  
Operador catch serve para tratamento de erro, que está em outra classe/arquivo 
Share do rxjs */

/* gera um timestamp aleatório entre um min e um máximo  */
//  tsRandom(min: number, max: number) {
//   return Math.random() * (max - min) + min;
//  }

/* serviço é usado para encapsular o acesso a API de back-end
   são 3 os escopos que posso usar para declarar um serviço
   módulo angular ..... providers:[], todos veem, foi aqui que foi declarado
   componente e componentes filhos ..... providers:[], só vai ser compartilhado pelo componente 
   e seus filhos mesmo se existir um identico em um módulo
   view providers de um componente ..... viewProviders:[], componentes filhos não terão acesso, somente o componente
   @Injectable() receber injeções do framework, exemplos: title, http e router */

/* programação Reativa 'Reactive Programming'
   quando um evento acontece, os que estão interessados são notificados e reagem a ele
   ideia baseada no padrão Observer: onde tem um obejto que é o foco do interesse e outros objetos
   interessados nele que são os listeners(que se inscrevem esperando um evento), quando acontece um evento ele executa uma ação
   os eventos vem em forma de stream, cada evento que acontece gera uma notificação aos objetos interessados
   a stream é consumida item a item até que se chegue ao fim e não existam mais objetos
   iterator + observer
   RXJS, o objeto principal é Observable
   Observables continuam disparando eventos até que sejam explicitamente fechados => Múltiplos Eventos
   Promises são consideradas resolvidas depois do primeiro evento */