let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let menorNumero = numbers[0]

for (let index = 1; index < numbers.length; index++) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index]
  }
}
console.log('O menor número é: ' + menorNumero)
