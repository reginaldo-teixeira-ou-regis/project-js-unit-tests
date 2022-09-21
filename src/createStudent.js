/*
  A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Implemente a função de forma que ela atenda aos testes propostos.

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

/* const reicevePhrase = () => 'Eita pessoa boa!'; */

const createStudent = (nick) => {
  const objectName = { name: nick };
  const objectPhrase = { feedback: 'Eita pessoa boa!' };
  const newObject = {};
  return Object.assign(newObject, objectName, objectPhrase);
};

console.log(typeof createStudent('Leandrão, o Lobo Solitário'));
console.log(createStudent('Leandrão, o Lobo Solitário'));

module.exports = createStudent;