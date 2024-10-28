function solution(n, results) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(false));

    // 승리 graph 생성
    for (const [win, lose] of results) {
        graph[win][lose] = true;
    }

    // a가 b에게 이기고 b가 c에게 이기면 a가 c에게 이긴것
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 1; k <= n; k++) {
                if(graph[j][i] && graph[i][k]) {
                    graph[j][k] = true;
                }
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= n; j++) {
            if(i === j) continue;

            // 지거나 이기는게 확실하면
            if(graph[i][j] || graph[j][i])
                count++;
        }

        // 자신 제외 승패가 확실하면 순위 측정 가능
        if(count === n - 1) {
            answer++;
        }
    }

    return answer;
}
