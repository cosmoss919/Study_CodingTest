const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();//.trim().split('\n');
const byte = parseInt(input);
let result = "";
for (let i = 1; i < byte / 4; i++) {
    result += "long ";
}
result += "long int"

console.log(result);

