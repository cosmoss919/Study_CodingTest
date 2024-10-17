const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const n = Number(input[0].split(' ')[0]);
let result = new Array(n).fill().map((obj, index) => index + 1);

for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    const temp = result[a - 1];
    result[a - 1] = result[b - 1];
    result[b - 1] = temp;
}

console.log(...result);
