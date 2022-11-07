var nome = "Tiago"

var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7.5
var notaDoTerceiroBimestre = 6
var notaDoQuartoBimestre = 9.5

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

 var notaFixada = notaFinal.toFixed (1)

var grausCelsius = 10
var grausFh = (grausCelsius * 1.8) + 32

var emReais = 100
var emDolar = emReais / 5.06


var valorFinal = emDolar.toFixed (2)


console.log("Bem vindo " + nome)
console.log("Hoje tá " + grausFh + " graus Fahrenheit")
console.log("Ou seja, tá " + grausCelsius + " graus Celsius")
console.log("100 reais no dia de hoje é R$" + valorFinal + " Dólares")
console.log("Parabéns! Sua média final é " + notaFixada + ". Você passou de ano!")



// revisão 
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação