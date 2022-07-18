
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

// comparei o índice da primeira ocorrência de um elemento com todos os elementos Se eles não corresponderem estão duplicados
const duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));

console.log(duplicates);

