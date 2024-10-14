// a = 필요 금, b = 필요 은, g = 보유 금, s = 필요 은, w = 최대 무게, t = 편도 시간
// i번도시는 i번만 왕복할 수 있음
// 모든 트럭은 같이 움직일 수 있음, 가장 오래걸리는 트럭의 시간을 구해야함
// 모르겠다....

// 이분 탐색 문제로 "T라는 시간안에 금과은을 모두 옮길 수 있는가?"의 문제로 환원해야함
// 1. 금을 우선적으로 옮겼을 때 금을 모두 옮길 수 있는가?
// 2. 은을 우선적으로 옮겼을 때 은을 모두 옮길 수 있는가?
// 3. 1번과 2번 중 하나를 선택했을 때, a + b kg 보다 같거나 큰 무게를 옮기고 있는가?
// 최대 필요량(10^9) * 최소무게(1) * 최대시간(10^5) * 금은 각각 2번씩 왕복 = 10e5 * 4 * 10e9


function solution(a, b, g, s, w, t) {
    let answer = 10e5 * 4 * 10e9;

    let start = 0;
    let end = 10e5 * 4 * 10e9;  //최대 경우의 수

    // 이분탐색
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        let gold = 0;   // 금
        let silver = 0; // 은
        let add = 0;    // 금 + 은

        for( let i =0; i < s.length; i++ ) {
            let now_g = g[i];   // 금 보유량
            let now_s = s[i];   // 은 보유량
            let now_w = w[i];   // 옮기는 양
            let now_t = t[i];   // 옮기는 시간

            let move_cnt = Math.floor(mid / (now_t * 2));   // 걸리는 시간 = mid / 왕복 시간
            if(mid % (now_t * 2) >= t[i]) move_cnt++;   // 왕복하고 남는 시간(옮길 수 있는 시간)이 편도의 시간보다 크다면 1 더하기

            // 보유량(now_g, now_s)과 왕복으로 옮기는 총량(move_cnt * now_w) 중 최소값 더하기
            gold += (now_g < move_cnt * now_w) ? now_g : move_cnt * now_w;
            silver += (now_s < move_cnt * now_w) ? now_s : move_cnt * now_w;
            add += (now_g + now_s < move_cnt * now_w) ? now_g + now_s : move_cnt * now_w;
        }

        // gold가 목표량(a) 이상, silver가 목표량(b) 이상, gold + silver가 (a+b) 이상이면 충분한 시간이라고 판단
        if(gold >= a && silver >= b && add >= a + b) {
            end = mid - 1;
            answer = Math.min(mid, answer);
        }else {
            start = mid + 1;
        }
    }

    return answer;
}
