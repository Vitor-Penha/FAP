/* Faça um programa que leia as três notas do aluno e calcula a sua média e a sua situação
(aprovado por média, prova final ou reprovado direto). A média é calculada da seguinte
forma: descarta a menor nota e a média é calculada usando as duas maiores notas. A situação
do aluno depende da sua média e é apresentada na tabela */

let nota1 = parseFloat(prompt("Nota 1: "))
let nota2 = parseFloat(prompt("Nota 2: "))
let nota3 = parseFloat(prompt("Nota 3: "))

let media = (nota1+nota2+nota3-Math.min(nota1,nota2,nota3))/2
if(media>=7.0){
  alert("Média: "+media+"\n"+"Aprovado por média")
}else if(media>=3.0 & media<7.0){
  alert("Média: "+media+"\n"+"Prova final")
}else{
  alert("Média: "+media+"\n"+"Reprovado direto")
}
