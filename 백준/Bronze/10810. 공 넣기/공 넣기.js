const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const n = Number(input[0].split(' ')[0]);
let result = new Array(n).fill(0);

for (let i = 1; i < input.length; i++) {
    const numList = input[i].split(' ').map(Number);
    for (let j = numList[0]; j <= numList[1]; j++) {
        result[j - 1] = numList[2];
    }
}

console.log(...result);