// -  Create a two dimensional list (of strings)
//    which can contain the different shades of specified colors
// -  In `colors[0]` store the shades of green:
//    `"lime", "forest green", "olive", "pale green", "spring green"`
// -  In `colors[1]` store the shades of red:
//    `"orange red", "red", "tomato"`
// -  In `colors[2]` store the shades of pink:
//    `"orchid", "violet", "pink", "hot pink"`
// - Print the array in the following format:
//
//   lime, forest green, oline, pale green, spring green
//   orange red, red, tomato
//   orchid, violet, pink, hot pink

const colors2: any[] = [
  ["lime", "forest green", "olive", "pale green", "spring green"],
  ["orange red", "red", "tomato"],
  ["orchid", "violet", "pink", "hot pink"],
];

for (let i = 0, l1 = colors.length; i < l1; i += 1) {
  for (let j = 0, l2 = colors[i].length; j < l2; j += 1) {
    console.log(colors[i][j]);
  }
}
