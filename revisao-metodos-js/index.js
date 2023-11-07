const animais = ["vaca", "cachorro", "gato", "pato", "vaca"];
const produtos = [
    {
      nome: "Bola futebol",
      categoria: "esporte",
    },
    {
      nome: "Blusa social",
      categoria: "social",
    },
    {
      nome: "Bola vôlei",
      categoria: "esporte",
    },
    {
      nome: "Sapato social",
      categoria: "calcados",
    },
  ];
const numeros = [0, -15, -2300, 1, 150, 43000];
//console.log(animais);
// acrescenta um novo valor no index 1
//animais.splice(1,0, "girafa"); 
//console.log(animais);
// remover o valor do index 3 e inserir o valor "rato" no lugar 
//animais.splice(3,1, "rato");
//console.log(animais);
//remove o valor do index 1 e nao acrescenta nada
//animais.splice(0,1);
//console.log(animais);

//utilizando o filter
//const animaisFind = animais.filter((animal, index) => {
    //if (animal === "vaca") {
   //     console.log(`vaca esta no index ${index}`);
   //     return true;
    //}
  //  return false
//});
//console.log(animaisFind);

//const indexVaca = animais.findIndex((animal) => animal === "vaca");
//console.log(indexVaca);

  // utlizando o retorno de ambos o index
//const indexVacas = [];
//animais.forEach((animal, index) => {
  //  if (animal === "vaca") {
  //      indexVacas.push(index);
  //  }
//});

//console.log("index das vacas:", indexVacas);

 //--------------------------------------------------- 

 // console.log(animais);
// acrescenta um novo valor no index 1
// animais.splice(1, 0, "girafa");
// console.log(animais);
// remove o valor do index 3 e insere o valor "rato" no lugar
// animais.splice(3, 1, "rato");
// console.log(animais);
// remove o valor do index 1 e não acrescenta nada
// animais.splice(0, 1);
// console.log(animais);
// const animaisFind = animais.find((animal) => animal === "vaca");
// const numeroMaiorQueZero = numeros.find((numero) => numero > 0);
// console.log(numeroMaiorQueZero);
// const animaisFilter = animais.filter((animal) => animal.includes("ca"));
// console.log(animaisFilter);
// const produtosFiltrados = produtos.filter(
//   (produto) =>
//     produto.categoria === "social" || produto.categoria === "calcados"
// );
// const produtosFiltrados = produtos.filter((produto) =>
//   produto.nome.toLocaleLowerCase().includes("bola")
// );
// console.log(produtosFiltrados);
// produtos.forEach((produto) => {
//   if (produto.categoria === "esporte") {
//     produto.categoria = "teste";
//   }
// });
// console.log(produtos);

// const somaArray = numeros.reduce((prev, current) => {
//   console.log(prev, current);
//   return prev + current;
// }, 1000);

const estoqueSomado = produtos.reduce((prev, current) => {
  console.log(prev, current.valor);
  return prev + current.valor;
}, 0);

console.log(estoqueSomado);