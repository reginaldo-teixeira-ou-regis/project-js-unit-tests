/* A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const isNumberOrIsEmpty = (array) => {
  for (let i of array) {
    if (typeof i !== 'number') {
      throw new Error(undefined);
    }
  }
  if (array.length === 0) {
    throw new Error(undefined);
  }
};

const average = (array) => {
  try {
    isNumberOrIsEmpty(array);
    let sum = 0;
    let result;
    for (let count of array) {
      sum += count;
    }
    result = sum / array.length;
    return Math.round(result);
  } catch (error) {
    return undefined;
  }
};

console.log(average([4, 2, 6, 3, 7, 1]));
console.log(average([0, 2, 6, 3, 7, 1]));
console.log(average([4, 2, '', 3, 7, 1]));
console.log(average([4, 2, '1', 3, 7, 1]));
console.log(average([4, 2, 'r', 3, 7, 1]));
console.log(average([]));

module.exports = average;
