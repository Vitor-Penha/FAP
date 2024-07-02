/*Faça um programa para converter uma temperatura dada em graus Fharenheit para Graus
Celcius segundo a seguinte fórmula: TC = (tf -32)*5/9.*/

let tempF = parseFloat(prompt("Temperatura em Fharenheit: "))
let tempC = (tempF-32)*(5/9)
alert("Temperatura em Celcius "+tempC.toFixed(2)+"°C")