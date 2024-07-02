/*Dada as seguintes entradas: quilometragem inicial, quilometragem final, litros consumidos,
preço do litro de combustível. Faça um programa que imprima o seguinte Relatório: distância
percorrida, Valor total gasto e o consumo do carro (quantos quilômetros percorre com 1 litro
de combustível).*/

let kmInicial = parseInt(prompt("Quilometragem Inicial: "))
let kmFinal = parseInt(prompt("Quilometragem Final: "))
let combustivel =  parseInt(prompt("Litros consumidos: "))
let preco = parseInt(prompt("Preço por litro: "))
let distancia = kmFinal-kmInicial
let gasto = combustivel*preco
let consumo = distancia/combustivel

alert(
    "Distância percorrida: "+distancia+" km"+"\n"+
    "Valor total gasto: R$ "+gasto+"\n"+
    "Consumo do carro: "+consumo+" km/l"  
  )