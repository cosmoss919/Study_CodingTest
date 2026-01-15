function solution(ineq, eq, n, m) {
    if(ineq === '<') {
        return +(eq === '=' ? n <= m : n < m);
    } else {
        return +(eq === '=' ? n >= m : n > m);
    }
}