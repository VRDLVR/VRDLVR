// - Create a variable named `numbers`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements of `numbers`
// - do it with the built in method
// - do it with creating a new temp array and a loop
// - Print the elements of the reversed `numbers`

const numbers2: number[] = [3, 4, 5, 6, 7].reverse();

console.log(`With built in method ${numbers2}`);

const tempArray: number[] = [];

for (let i = numbers2.length - 1; i >= 0; i -= 1) {
  tempArray.push(numbers2[i]);
};

console.log(`With temp array ${tempArray}`);

// it is working but not visible, because  its already reversed,
// so for the second reverse it looks like nothing happened (rereversed literally)
