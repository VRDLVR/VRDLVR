// - Create an array variable named `orders`
//   with the following content: `["first", "second", "third"]`
// - Swap the first and the third element of `orders`
// - Print the 'swapped' array into the console:
//   [third, second, first]


const orders: string[] = ['first', 'second', 'third'];

[orders[0], orders[2]] = [orders[2], orders[0]];

console.log(orders);

