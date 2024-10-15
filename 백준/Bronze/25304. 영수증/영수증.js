const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const total = input[0];
const stuffList = input.slice(2, input.length).map(x => x.split(' '));
const sum = stuffList.reduce((acc, item) => {
    return acc + Number(item[0]) * Number(item[1])
}, 0);

console.log(sum === Number(total) ? 'Yes' : 'No' );


