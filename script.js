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


