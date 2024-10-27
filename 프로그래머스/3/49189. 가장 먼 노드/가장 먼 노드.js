function solution(n, edge) {
    let answer = 1;
    // 그래프 생성
    let graph = Array.from(Array(n + 1), () => []);
    for (let i = 0; i < edge.length; i++) {
        graph[edge[i][0]].push(edge[i][1]);
        graph[edge[i][1]].push(edge[i][0]);
    }

    // 걸리는 거리 배열
    let dist = new Array(n + 1).fill(-1);
    let visited = new Array(n).fill(false);
    dist[1] = 0;
    visited[1] = true;

    // 한개씩 방문하면서 새로운 네트워크 발견하면 ++;
    let queue = [1];
    while(queue.length > 0) {
        let cur = queue.shift();
        for (const g of graph[cur]) {
            if(!visited[g]) {
                visited[g] = true;
                dist[g] = dist[cur] + 1;
                queue.push(g);
            }
        }
    }

    let maxDist = Math.max(...dist);
    return dist.filter(d => d === maxDist).length;
}