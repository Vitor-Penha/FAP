/*Faça um programa que leia o nome do usuário, a idade do usuário, o nome da mãe do usuário,
a idade da mãe do usuário, o nome do pai do usuário e a idade do pai do usuário. O programa
devera imprimir na tela quantos anos a mãe e o pai do usuário tinha quando ele nasceu. A
resposta deve ter o formato deste exemplo:
“Carlos, quando você nasceu, Dona Cecilia tinha 27 anos e Seu Paulo tinha 32 anos”.*/

let nome = prompt("Nome: ")
let idade = prompt("Idade: ")
let nomeMae = prompt("Nome da sua mãe: ")
let idadeMae = prompt("Idade da sua mãe: ")
let nomePai = prompt("Nome do seu pai: ")
let idadePai = prompt("Idade do seu pai: ")
alert(nome+", quando você nasceu, Dona "+nomeMae+" tinha "+(idadeMae-idade)+" anos e Seu "+nomePai+" tinha "+(idadePai-idade)+" anos")