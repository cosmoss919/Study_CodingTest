function solution(jobs) {
    let answer = jobs[0][1];
    jobs = jobs.sort((a, b) => a[0] - b[0]);
    let time = jobs[0][1];
    // 첫번째꺼 이후로 작업 시간이 짧은 순으로 정렬
    let sliceJobs = jobs.slice(1).sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    let i = 0;
    while (sliceJobs.length > 0) {
        if(sliceJobs[i][0] <= time) {
            time += sliceJobs[i][1];
            answer += time - sliceJobs[i][0];
            sliceJobs.splice(i, 1);
            i = 0;
        } else {
            i++;
        }

        if(i === sliceJobs.length) {
            let findIndex = sliceJobs.findIndex(j => j[0] === Math.min(...sliceJobs.map(s => s[0])))
            if(findIndex === -1) {
                break;
            }
            time = sliceJobs[findIndex][0] + sliceJobs[findIndex][1];
            answer += sliceJobs[findIndex][1];
            sliceJobs.splice(findIndex, 1);
            i = 0;
        }
    }

    return Math.floor(answer / jobs.length);
}