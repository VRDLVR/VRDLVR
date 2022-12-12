

// - Create an array variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

let numbers2 = [54, 23, 66, 12]

let counter = 0

function sumElements() {
    for (let digit of numbers2) {
        counter += digit
    }
    console.log(counter)
}

sumElements()