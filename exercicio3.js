/*Faça um algoritmo para que solicite o nome do usuário, a nota dele em duas avaliações e
imprima o nome dele junto com a média de suas notas*/

let nome = prompt("Informe seu nome: ")
let valor1 = parseInt(prompt("Nota 1: "))
let valor2 = parseInt(prompt("Nota 2: "))
let media = (valor1+valor2)/2
alert(nome+" sua média é: "+media)