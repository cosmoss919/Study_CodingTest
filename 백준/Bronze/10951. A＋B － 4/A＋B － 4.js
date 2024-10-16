const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
input.forEach((item) => {
    const nums= item.split(" ").map(Number);
    console.log(nums[0] + nums[1]);
})