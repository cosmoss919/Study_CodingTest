function solution(n, control) {
     return [...control].reduce((acc, cur) => {
          switch (cur) {
               case "w":
                    return acc + 1;
               case "s":
                    return acc - 1;
               case "d":
                    return acc + 10;
               case "a":
                    return acc - 10;
          }
     }, n);
}

/*
function solution(n, control) {
    const map = { w: 1, s: -1, d: 10, a: -10 };
    return [...control].reduce((acc, c) => acc + map[c], n);
}
*/