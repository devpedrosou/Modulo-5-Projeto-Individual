import readlineSync from "readline-sync";


const propriedades = [];
let inserir = "";

while (inserir != "sair") {
  propriedades.push(inserir);
  inserir = readlineSync
    .question("insira uma propriedade CSS: ")
    .toLocaleLowerCase();
}
console.log((propriedades.sort().join("\n")));