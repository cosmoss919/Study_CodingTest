const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const numList = input[1].split(' ');
let result = 0;
for (const num of numList) {
    if(num === input[2])    result ++;
}
console.log(result);