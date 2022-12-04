// Write a program that stores 3 sides of a cuboid as variables (numbers)
// The program should write the surface area and volume of the cuboid.
//
// Set the 3 sides to 10.4, 13.5, 8.2 and your program should
// produce the following output:
//
// Surface Area: 672.76
// Volume: 1151.28

export function cuboid(a:number, b:number, c:number) {
    let surfaceArea = 2*(a*b+b*c+a*c)
    let volume = a*b*c
    console.log(`Surface Area: ${surfaceArea}`)
    console.log(`Volume: ${volume}`)
}

cuboid(10.4,13.5,8.2)