const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
const max = Math.max(...input);
console.log(max);
console.log(input.findIndex(t => t === max) + 1);