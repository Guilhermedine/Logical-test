//Implemente os métodos abaixo:

//1) Implemente um método que crie um novo array baseado nos valores passados.
//Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function method1(number3, letterA) {
  const letterAArray = [];
  for (i = 1; i <= number3; i++) {
    letterAArray.push(letterA);
  }
  console.log(letterAArray)

  return letterAArray;
}

method1(3, 'a');

//2) Implemente um método que inverta um array, não utilize métodos nativos do array.
//Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function method2() {
  const numbers2 = [1, 2, 3, 4];
  const newNumbers2 = [];

  for (i = numbers2.length - 1; i >= 0; i--) {
    newNumbers2.push(numbers2[i])
  }
  console.log(newNumbers2)
  return newNumbers2;
}

method2();

//3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
//Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function method3() {
  const numbers3 = [1, 2, '', undefined]
  const newNumbers3 = numbers3.filter(number => number >= 1)

  console.log(newNumbers3)
  return newNumbers3
}

method3();

//4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
//Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function method4() {
  const arrayOfArray = [["c", 2], ["d", 4]]
  const arrayToObject = Object.assign({}, arrayOfArray);
  console.log(arrayToObject)
  return arrayToObject
}

method4();

//5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

//6) Implemente um método que retorne um array, sem valores duplicados.
//Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

//7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
//Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

//8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
//Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

//9) Implemente um método divida um array por uma quantidade passada por parâmetro.
//Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

//10) Implemente um método que encontre os valores comuns entre dois arrays.
//Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

//ps: Esses exercícios são de senso comum da comunidade desenvolvimento, utilize o melhor padrão para implementação, criando uma semântica factível.