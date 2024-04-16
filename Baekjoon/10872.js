//https://www.acmicpc.net/problem/10872

const fs = require('fs');
const num = fs.readFileSync('/dev/stdin').toString();
console.log(pactorial(num));
function pactorial(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * pactorial(num - 1);
    }
}