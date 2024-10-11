// 1. m을 n으로 나눠보기 => 실패!
// function solution(n, m) {
//     let answer = [];
//
//     for (let i = n; i > 1; i--) {
//         if(m % i === 0) {
//             answer.push(i);
//             answer.push(m);
//             break;
//         }
//     }
//
//     if(answer.length === 0){
//         answer.push(1);
//         answer.push(n * m);
//     }
//
//     console.log(answer);
//     return answer;
// }


// 2. 최대공약수 부분 조건 추가 => 실패!
// function solution(n, m) {
//     let answer = [];
//
//     for (let i = n; i > 1; i--) {
//         if(m % i === 0 && n % i === 0) {
//             answer.push(i);
//             answer.push(m);
//             break;
//         }
//     }
//
//     if(answer.length === 0){
//         answer.push(1);
//         answer.push(n * m);
//     }
//
//     console.log(answer);
//     return answer;
// }

// 유클리드 호제법(Euclidean algorithm) 이용
// 1. 두 수 중에서 큰 수(a)를 작은 수(b)로 나눕니다. 나머지(r)
// 2. 나머지(r)가 0이 될 때까지, 큰 수를 작은 수로 나누는 과정을 반복합니다.(이때 a는 b가 되고 r은 b가 됨)
// 3. 나머지(r)가 0이 되는 순간의 작은 수가 바로 두 수의 최대공약수입니다.
// 최대공약수를 알고 있다면, 두 수의 곱을 최대공약수로 나누면 최소공배수가 된다.
function solution(n, m) {
    let answer = [];

    let a = Math.max(n, m);
    let b = Math.min(n, m);
    let r = a % b;
    while (r !== 0) {
        a = b;
        b = r;
        r = a % b;
    }

    answer.push(b);
    answer.push((n * m) / b);

    return answer;
}


