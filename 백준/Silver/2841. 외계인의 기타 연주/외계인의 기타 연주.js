const fs = require('fs');
const [maxMel, maxPret, ...inputList] = fs.readFileSync('dev/stdin').toString().replaceAll("\n", " ").split(" ");

let inputStack = {};
for (let i = 0; i < inputList.length - 1; i+= 2) {
    if(inputStack[inputList[i]]) {
        inputStack[inputList[i]].push(Number(inputList[i + 1]));
    }
    else {
        inputStack[inputList[i]] = [];
        inputStack[inputList[i]].push(Number(inputList[i + 1]));
    }
}

let stack = {};
let count = 0;
for (const input in inputStack) {
    for (const pret of inputStack[input]) {
        if(!stack[input]) {
            stack[input] = [];
            stack[input].push(pret);
            count++;
        } else {
            let lastStack = stack[input][stack[input].length - 1];
            while(lastStack > pret) {
                stack[input].pop();
                count++;
                lastStack = stack[input][stack[input].length - 1];
            }

            if(lastStack === pret)  continue;
            stack[input].push(pret);
            count++;
        }
    }
}

console.log(count);
