/* Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor.*/
let num1 = parseInt(prompt("Número 1: "))
let num2 = parseInt(prompt("Número 2: "))
let num3 = parseInt(prompt("Número 3: "))

let maior = Math.max(num1, num2, num3)
let menor = Math.min(num1, num2, num3)
alert("Maior: "+maior+"\n"+"Menor: "+menor)