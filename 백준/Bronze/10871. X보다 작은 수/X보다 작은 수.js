const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n', );
const x = Number(input[0].split(' ')[1]);
const aList = input[1].split(' ');

const text = [];
aList.forEach(a =>  {
    if(a < x)   text.push(a);
})

console.log(text.join(' '));