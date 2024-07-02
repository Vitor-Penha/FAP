/*Faça um programa que peça dois números ao usuário e mostre qual o maior e qual o menor.*/
let num1 = parseFloat(prompt("Número 1: "))
let num2 = parseFloat(prompt("Número 2: "))
let maior = Math.max(num1, num2)
let menor = Math.min(num1,num2)
alert("Maior: "+maior+"\n"+"Menor: "+menor)