let numbers = [5, 13, 1, 44, 32, 15, 500]

// menor para o maior
let lowestToHighest = numbers.sort((a, b) => a - b);
console.log(lowestToHighest)

// maior para o menor
let highestToLowest = numbers.sort((a, b) => b-a);
console.log(highestToLowest)

