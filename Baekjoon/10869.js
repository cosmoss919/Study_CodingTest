//https://www.acmicpc.net/problem/10869

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));     //toFixed()는 반올림
console.log(a % b);

