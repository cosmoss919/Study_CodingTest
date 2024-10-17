const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(Number);
for (let i = 1; i <= 30; i++) {
    if(!input.some(t => t === i)) console.log(i);
}
