const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const numList = input[1].split(' ').map(Number);
console.log(Math.min(...numList), Math.max(...numList));
