function solution(nums) {
    let answer = 0;
    const count = nums.length * 0.5;
    let saveList = [];
    nums.forEach(num => {
        if(!saveList.includes(num) && saveList.length < count) {
            saveList.push(num);
        }
    })
    answer = saveList.length;
    return answer;
}