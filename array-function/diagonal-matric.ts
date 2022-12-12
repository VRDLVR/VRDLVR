const size = 4;
// Write a program creates a two-dimensional array (of integers)
// of the specified size with the value of 1 on the main diagonal
// and the value of 0 everywhere else.
// Print the 2d array into the output
//
// Example:
//
// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1

const matrix: number[][] = createMatrix(size);
printMatrix(matrix);

export function createMatrix(size: number): number[][] {
  // write your code to create an nxn matrix
  // of the given size here
}
export function printMatrix(matrix: number[][]): void {
  // write your code to print the given matrix
  // into the (standard) output here
}
