/*Faça um algoritmo que solicite do usuário três valores e 
calcule a média das notas de um aluno: Imprima as três notas 
(Ex. A primeira nota foi 8, a segunda foi ....)
Imprima a média (Ex. A média do aluno é 7)*/

let valor1 = parseInt(prompt("Nota 1:"))
let valor2 = parseInt(prompt("Nota 2:"))
let valor3 = parseInt(prompt("Nota 3:"))
let soma = valor1+valor2+valor3
let media = soma/3
alert("A primeira nota foi "+valor1+", a segunda nota foi "+valor2+", a terceira nota foi "+valor3)
alert("A média das notas é: "+media)