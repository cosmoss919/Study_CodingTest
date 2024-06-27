const fs = require('fs');
const [M, N] = fs.readFileSync('dev/stdin').toString().split(' ').map(t => Number(t));


function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}




