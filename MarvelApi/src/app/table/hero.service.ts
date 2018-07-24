import { Hero } from "./hero.model";
import { MARVEL_API } from "../app.api";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

//para uma classe de serviço receber um outro serviço via injeção de dependencia precisa marca-la com o decorator @injectable
@Injectable()
export class heroService {

    constructor(private http: Http){}



    // INFORMAÇÃO MOCKADA    
//     heroes: Hero[] = [
//         {
//           id: 1009664,
//           name: "Thor",
//           description: "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
//           modified: "2016-01-05T12:33:20-0500",
//         },
//         {
//           id: 1009261,
//           name: "Carol Danvers",
//           description: "",
//           modified: "2012-06-06T15:38:57-0400",
//         }
// ]

    //metodo que vai me retornar um array de herois
//     getHeroes(): Promise<Hero[]> {
//         return Promise.resolve(this.heroes);
// }

       getHeroes(): Observable<Hero[]> {
           //utilizando o serviço http com get
           //o tipo Observable response não é compativel com o tipo response array de Hero, por isso precisamos mapear e converter para o tipo json, utilizando o operador map
           //toda requisição feita vai retornar observable response que representa a resposta crua, mas nós só precisamos do obejto json
           return this.http.get(`${MARVEL_API}` + this.tsRandom(0.1, 1)).map(response => response.json())
       }

       tsRandom(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
}

//usado para encapsular o acesso a API de back-end
//são 3 os escopos que posso usar para declarar um serviço
  //módulo angular ..... providers:[], todos veem, foi aqui que foi declarado
  //componente e componentes filhos ..... providers:[], só vai ser compartilhado pelo componente e seus filhos mesmo se existir um identico em um módulo
  //view providers de um componente ..... viewProviders:[], componentes filhos não terão acesso, somente o componente
//@Injectable() receber injeções do framework, exemplos: title, http e router

//programação Reativa 'Reactive Programming'
// - quando um vento acontece, os que estão interessados são notificados e reagem a ele
// - ideia baseada no padrão Observer: onde tem um obejto que é o foco do interesse e outros objetos
// interessados nele que são os listeners(que se inscrevem esperando um evento), quando acontece um evento ele executa uma ação
// os eventos vem em forma de stream, cada evento que acontece gera uma notificação aos objetos interessados
// a stream é consumida item a item até que se chegue ao fim e não existam mais objetos
// iterator + observer
// RXJS, o objeto principal é Observable
// Observables continuam disparando eventos até que sejam explicitamente fechados => Múltiplos Eventos
// Promises são consideradas resolvidas depois do primeiro evento