function solution(arr)
{
    let answer = [];

    let pre;
    answer.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        pre = arr[i - 1];
        if(pre != arr[i]) answer.push(arr[i]);
    }

    return answer;
}