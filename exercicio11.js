/* Faça um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem
que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela
nasceu). */

let nascimento = parseInt(prompt("Ano de nascimento: "))
let dataAtual = new Date()
if(dataAtual.getFullYear() - nascimento >= 16){
  alert("Pode votar!")
}else{
  alert("Não pode votar!S")
}