//https://www.acmicpc.net/problem/10871

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const x = Number(input[0].split(' ')[1]);
const aList = input[1].split(' ');

const text = [];
aList.forEach(a =>  {
    if(a < x)   text.push(a);
})

console.log(text.join(' '));

//매번 console.log 하는거랑 배열에 넣어놓고 join하는거랑 시간 차이 엄청남(log > join)