const fs = require('fs');
const [count, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


input.forEach(t => {
    const score = t.split(' ').slice(1).map(Number);
    const count = score.length;
    const avg = score.reduce((a,b) => a + b) / count;
    console.log(`${((score.filter(s => s > avg).length / count) * 100).toFixed(3)}%`);
})