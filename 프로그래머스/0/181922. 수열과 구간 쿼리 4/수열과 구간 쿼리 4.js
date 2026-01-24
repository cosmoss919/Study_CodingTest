function solution(arr, queries) {
    for (const [s, e, k] of queries) {
     for (let i = s; i <= e; i++) {
          if(i % k === 0) {
               arr[i]++;
          }
     }
    }

    return arr;
}

/*
function solution(arr, queries) {
    for (const [s, e, k] of queries) {
        let start = Math.ceil(s / k) * k;
        for (let i = start; i <= e; i += k) {
            arr[i]++;
        }
    }
    return arr;
}
*/