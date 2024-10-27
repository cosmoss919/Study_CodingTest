// function solution(n, computers) {
//     let answer = n;
//     let checked = [];
//     for (let i = 0; i < computers.length; i++) {
//         for (let j = 0; j < computers[i].length; j++) {
//             if(i === j) continue;
//             if(computers[i][j] === 1 && computers[i][j] === computers[j][i] && !checked.some(c => c[0] === i && c[1] === j)) {
//                 answer--;
//                 checked.push([i, j]);
//                 checked.push([j, i]);
//             }
//         }
//     }
//
//     return answer;
// }

function solution(n, computers) {
    let networkCount = 0;
    const visited = new Array(n).fill(false);

    function dfs(index) {
        // 현재 컴퓨터 방문 처리
        visited[index] = true;

        // 현재 컴퓨터와 연결된 다른 컴퓨터들 탐색
        for(let i = 0; i < n; i++) {
            if(computers[index][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }

    // 모든 컴퓨터를 순회하면서 체크
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {  // 아직 방문하지 않은 컴퓨터라면
            networkCount++;  // 새로운 네트워크 발견
            dfs(i);  // 해당 네트워크에 연결된 모든 컴퓨터 탐색
        }
    }

    return networkCount;
}