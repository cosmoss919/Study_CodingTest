function solution(n) {
    let answer = [];

    while(n > 0) {
        answer.push(n);
        if(n === 1) break;

        if(n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }

    return answer;
}

/* 이렇게도 풀 수 있지만 메모리와 콜스택 관점에서 while문이 더 낫다
function solution(n, arr = []) {
    arr.push(n)
    if (n === 1) return arr
    if (n % 2 === 0) return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
}
*/