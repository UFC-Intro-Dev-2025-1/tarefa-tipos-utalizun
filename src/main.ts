//1. Implemente elementos da sala de aula como variáveis em TypeScript com tipos: `number`, `string`, `boolean`, `undefined` e objeto. Exiba as variáveis no terminal.

//Implemente elementos da sala de aula como variáveis em TypeScript com tipos: number, string, boolean, undefined e objeto. Exiba as variáveis no terminal.

const Janelas :{
    Quantidade: number;
}={ Quantidade: 6, }

const Professora :{ 
nome: string;
}={ nome:"Lana", }

const Arcondicionado:{
   Funcionando: boolean;
}={ Funcionando: true, }

let soninho;

// console.log(" Na sala há:"+ Janelas.Quantidade + " A aula é ministrada pela professora:" + Professora.nome + "nesse momento o Ar condicionado está:" + Arcondicionado.Funcionando, + " o presente aluno está:" + soninho );

console.log(`
    Na sala há ${Janelas.Quantidade} janelas\n
    A aula é ministrada pela professora ${Professora.nome}\n
    Nesse momento o ar condicionado está ${Arcondicionado.Funcionando == true ? "Ligadinho" : "Desligadinho"}\n
    Tô me sentindo meio... ${soninho}
`);

//Short IF -> condição? se verdadeiro : se falso