//https://www.acmicpc.net/problem/2869

const fs = require('fs');
const [up, down, goal] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const beforeLastStep = goal - up;
let result = Math.ceil(beforeLastStep / (up - down));
console.log(result + 1);