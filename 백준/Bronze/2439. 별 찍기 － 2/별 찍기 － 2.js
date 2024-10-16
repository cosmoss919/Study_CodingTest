const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const count = Number(input[0]);

let star = "";
for (let i = 0; i < count; i++) {
    star += "*";
    console.log(star.padStart(count, " "));
}
