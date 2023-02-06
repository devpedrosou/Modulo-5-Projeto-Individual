import readlineSync from "readline-sync";


const propriedades = [];
let inserir = "";

while (inserir != "sair") {
  inserir = readlineSync
    .question("insira uma propriedade CSS: ")
    .toLocaleLowerCase();
    if(inserir){
      propriedades.push(inserir);
    }
}
console.log((propriedades.sort().filter(Boolean).join("\n")));
