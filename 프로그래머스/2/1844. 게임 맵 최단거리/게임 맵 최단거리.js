function solution(maps) {
    let X = maps.length;
    let Y = maps[0].length;

    let moveX = [1, -1, 0, 0];
    let moveY = [0, 0, 1, -1];

    let visited = Array.from(Array(X), () => Array(Y).fill(false));
    let queue =[[0,0,1]];
    visited[0][0] = true;

    while(queue.length > 0) {
        let [x, y, dist] = queue.shift();
        if(x === X - 1 && y === Y - 1) return dist;

        for (let i = 0; i < moveX.length; i++) {
            let mx = x + moveX[i];
            let my = y + moveY[i];

            if(mx >= 0 && mx < X && my >= 0 && my < Y && !visited[mx][my] && maps[x][y] === 1) {
                visited[mx][my] = true;
                queue.push([mx, my, dist + 1]);
            }
        }
    }

    return -1;
}