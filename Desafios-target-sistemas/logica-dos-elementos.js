/*
3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, ___
b) 2, 4, 8, 16, 32, 64, ____
c) 0, 1, 4, 9, 16, 25, 36, ____
d) 4, 16, 36, 64, ____
e) 1, 1, 2, 3, 5, 8, ____
f) 2,10, 12, 16, 17, 18, 19, ____
*/

let numeroFinal = 1000

for (var i = 1; i < numeroFinal; i += 2) {
  //console.log(i + '\n') - resposta da letra A = 9
}

for (var i = 1; i < numeroFinal; i *= 2) {
  //console.log(i + '\n') - resposta da letra B = 128
}

let numeroAnterior = 0

for (var i = 1; i < numeroFinal; i += 2) {
  let atual = numeroAnterior + i

  //console.log(`${atual}`) - resposta da letra c = 49

  numeroAnterior = atual
}

for (var i = 2; i < numeroFinal; i += 2) {
  // console.log(`${i ** 2}`) - resposta da letra D = 100
}

/* 
let num1 = 0
let num2 = 1

console.log(num1 + '\n' + num2)

while (num1 <= numeroFinal) {
  let num3 = num1 + num2

  num1 = num2
  num2 = num3

  console.log(num2) - resposta da letra E = 13
}
*/

// A letra F = 200. Pois se trata de uma sequência formada através de todos os números que iniciam com a letra "d". Assim, o próximo número em ordem crescente que inicia com a letra d é 200.
