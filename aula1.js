

let marca = 'Honda';
let modelo = 'civic';
let ano = 2004;
let motor = 1.7;
let cor = 'prata';
let carro = { name:"Honda", marca: marca, modelo: modelo, ano: ano, motor: motor, cor: cor };
let carroFusca = { name:"Fusca",marca: 'VW', modelo: 1980, ano: 1981, motor: 1.5, cor: 'vermelho' };
// console.log(carro.marca);


// //Criar um objeto do tipo Pessoa, com atributo nome, age, gender, height, weight
// //Criar um objeto, do tipo Carro, com atributo marca modelo ano cor, motor
// //Criar uma lista contendo a pessoa, e o carro.
let carroDosSonhos = false;



// && - AND
// || OR
// ! NOT
// ==
let tenhoDinheiro = true;
        //tenhoDinheiro === false -> false
        //!tenhoDinheiro === false -> verdade


let listaCarros = [carro,carroFusca];


listaCarros.forEach(carro => {
    console.log(carro.name);
});
// console.log(listaCarros);


// for (let index = 0; index < listaCarros.length; index++) {

//     console.log("Estou acessando qual carro?",index);
//     console.log("O Nome do carro é:",listaCarros[index].name);


// }

// let index = 0;
// while (index != 2)  {
//     console.log("TESTE");
//     index++;
// }



// let list = [carro, pessoa];
// console.log(list);

// console.log(list.filter(x => x.age === 19));


// console.log(lista)


console.log("AULA_TERMINADA");
