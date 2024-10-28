function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]); // 도착 시간 기준으로 정렬
    const heap = [];
    let time = 0;
    let index = 0;
    let answer = 0;

    while (index < jobs.length || heap.length > 0) {
        // 현재 시간 이하로 도착한 작업들을 힙에 추가
        if (index < jobs.length && jobs[index][0] <= time) {
            heap.push(jobs[index++]);
            heap.sort((a, b) => a[1] - b[1]); // 작업 시간을 기준으로 정렬
            continue; // 작업이 추가되면 다음 while 반복으로 이동
        }

        // 힙에 작업이 있으면 작업을 처리하고, 없으면 다음 작업 시간으로 이동
        if (heap.length > 0) {
            const [start, duration] = heap.shift();
            time += duration;
            answer += time - start;
        } else {
            time = jobs[index][0];
        }
    }

    return Math.floor(answer / jobs.length);
}