function solution(arr, queries) {
     let result = [];
     for (const [s, e, k] of queries) {
          let num = Math.min(...arr.slice(s, e + 1).filter(t => t > k));
          result.push(num === Infinity ? -1 : num);
     }
     return result;
}