/* Para doar sangue é necessário ter entre 18 e 67 anos. Faça um aplicativo na linguagem
JavaScript que pergunte a idade de uma pessoa e diga se ela pode doar sangue ou não. Use
alguns dos operadores lógicos OU (||) e E (&&). */

let idade = parseInt(prompt("Idade: "))
if(idade >= 18 && idade <= 67){
  alert("pode doar!")
}else{
  alert("não pode doar!")
}