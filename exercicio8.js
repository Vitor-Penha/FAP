/*Uma organização resolveu dar um aumento de salário aos seus colaboradores e lhe contratam
para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o
salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
Salários até R$ 280,00 (incluindo): aumento de 20%
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
Salários de R$ 1500,00 em diante: aumento de 5% Após o aumento ser realizado, informe na
tela:
O percentual de aumento aplicado;
O valor do aumento;
O novo salário, após o aumento.*/

let salario = parseFloat(prompt("Salário: "))
let aumento
if(salario<280.00){
  aumento=1.2
}else if(salario>=280.00 & salario<700.00){
  aumento=1.15
}else if(salario>=700.00 & salario<1500.00){
  aumento=1.1
}else{
  aumento=1.05
}
let valorAumentado = salario*(aumento-1)
alert(
  "Percentual de aumento: "+aumento+"\n"+
  "Valor do aumento: "+valorAumentado.toFixed(3)+"\n"+
  "Salário com aumento: "+(salario*aumento).toFixed(3)
)