const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const numList = input.slice(1, input.length);
for (let i = 0; i < numList.length; i++) {
    const numbers = numList[i].split(' ').map(Number);
    console.log(`Case #${i + 1}: ${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}`);
}


