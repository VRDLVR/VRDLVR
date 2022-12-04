let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;
let second: number = 60
let secondsPerDay: number = 86400
let minute: number = 60

export function seconds(a: number, b: number, c: number, d: number, e: number, f: number) {
    console.log(e - (a*f*d + b*d + c))  
}

seconds(currentHours, currentMinutes, currentSeconds, second, secondsPerDay, minute)