const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const curTime = input[0].split(' ').map(n => parseInt(n));
const waitTime = Number(input[1]);
const calcH = Math.floor(waitTime / 60);
const calcM = waitTime % 60;
let Hour = curTime[0] + calcH;
let Minute = curTime[1] + calcM;
if(Minute >= 60) {
    Hour++;
    Minute -= 60;
}
if(Hour >= 24) {
    Hour -= 24;
}
console.log(`${Hour} ${Minute}`);