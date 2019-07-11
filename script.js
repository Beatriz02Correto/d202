/*
let nomeDoAluno = prompt("Seja bem vindo ao sistema de aprovação da sua escola, Qual seu nome?");
alert("Olá "+ nomeDoAluno);
let materia = prompt("Qual materia vamos consultar hoje?");
let nota = prompt("Qual foi sua nota?");
let media = 6
if(Number(nota)>= media) {
    alert(nomeDoAluno + ", você foi aprovado!");
}
else if(Number(nota)>= media - 0.5){
    alert("UAAAAAAUUUU..."+nomeDoAluno+", Você foi aprovado, por pouco em...");
}
else{
    alert("você foi reprovado....");
}
*/

let lances = Number(prompt("Quantos Lances?"));
let material = prompt("MAterial?");
let desenho = '';
i = 0;

while(isNaN(lances)){
    lances= Number(prompt("você digitou " +lances+" Por favor só Numeros"))
}
while(i<lances){
    desenho = desenho + material;
    console.log(desenho);
    
    i++;
};
