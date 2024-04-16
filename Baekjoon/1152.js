//https://www.acmicpc.net/problem/1152

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(input.filter(t => t !== '').length);