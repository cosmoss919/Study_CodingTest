const fs = require('fs');
const [num, input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numbers = input.split(' ').map(Number);
let primeCount = 0;

// 소수 판별 함수
function isPrime(number) {
    if(number < 2) return false; // 1은 소수가 아님
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true; // 나누어 떨어지지 않으면 소수
}

// 소수의 개수 세기
numbers.forEach(number => {
    if(isPrime(number)) primeCount += 1;
})

console.log(primeCount); // 소수의 개수 출력