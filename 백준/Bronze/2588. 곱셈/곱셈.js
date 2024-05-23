const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = Number(input[0]);
const b = input[1];

b.split('').reverse().forEach(t => console.log(a * Number(t)));
console.log(a * Number(b));