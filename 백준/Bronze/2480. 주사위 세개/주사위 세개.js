const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const numbers = input.map(x => parseInt(x));

let checkList = {};
for (const number of numbers) {
    if(!checkList[number]) checkList[number] = 1;
    else checkList[number] ++;
}

for (const checkKey in checkList) {
    if(checkList[checkKey] === 3) {
        console.log(`${10000 + checkKey * 1000}`)
        return;
    } else if(checkList[checkKey] === 2) {
        console.log(`${1000 + checkKey * 100}`)
        return;
    }
}

console.log(`${Object.keys(checkList).map(x => parseInt(x)).sort((a,b) => {return  b - a})[0] * 100}`)