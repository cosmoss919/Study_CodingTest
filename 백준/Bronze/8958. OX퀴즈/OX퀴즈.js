const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const result = [];
for (let i = 1; i < n + 1; i++) {
    let sum = 0;
    let score = 0;
    for (let j = 0; j < input[i].length; j++) {
        if(input[i][j] === 'O'){
            score += 1;
            sum += score;
        } else {
            score = 0;
        }
    }
    console.log(sum);
}