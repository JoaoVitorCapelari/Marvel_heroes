import { Hero } from "./hero.model";

export class heroService {

    constructor(){}

    heroes: Hero[] = [
        {
          id: 1009664,
          name: "Thor",
          description: "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
          modified: "2016-01-05T12:33:20-0500",
        },
        {
          id: 1009261,
          name: "Carol Danvers",
          description: "",
          modified: "2012-06-06T15:38:57-0400",
        }
]

    //metodo que vai me retornar um array de herois
    getHeroes(): Hero[] {
        return this.heroes;
    } 

}

//usado para encapsular o acesso a API de back-end
//são 3 os escopos que posso usar para declarar um serviço
  //módulo angular ..... providers:[], todos veem, foi aqui que foi declarado
  //componente e componentes filhos ..... providers:[], só vai ser compartilhado pelo componente e seus filhos mesmo se existir um identico em um módulo
  //view providers de um componente ..... viewProviders:[], componentes filhos não terão acesso, somente o componente
//@Injectable() receber injeções do framework, exemplos: title, http e router