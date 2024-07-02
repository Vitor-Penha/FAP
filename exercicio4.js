/*Uma empresa vai dar um aumento de salário ao seu funcionário. Faça um programa para ler o
salário do funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.*/

let salario = parseFloat(prompt("Salário: "))
let reajuste = parseInt(prompt("Percentua de reajuste: "))
let novoSalario = salario*(reajuste+100)/100
alert("Seu novo salário é: "+novoSalario)