function solution(numLog) {
     const map = { '-1': 'w', '1': 's', '-10': 'd', '10': 'a' };
     let result = "";
     for (let i = 0; i < numLog.length - 1; i++) {
          let diff = numLog[i] - numLog[i + 1];
          result += map[diff];
     }
     return result;
}

/*
function solution(numLog) {
    const map = { 1: 'w', -1: 's', 10: 'd', -10: 'a' };
    return numLog.slice(1).map((v, i) => map[v - numLog[i]]).join('');
}

*/