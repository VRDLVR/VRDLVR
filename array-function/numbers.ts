// Create an array variable named `numbers`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Print the sum of the elements of `numbers`

const numbers: number[] = [3, 4, 5, 6, 7];
const result = numbers.reduce((sum, num) => sum + num);
console.log(result);
