function solution(cards1, cards2, goal) {
    let answer = '';
    let count = 0;
    for (let i = 0, j = 0, k = 0; k < goal.length; k++) {
        if(cards1[i] === goal[k]) {
            count++;
            i++;
        } else if(cards2[j] === goal[k]) {
            count++;
            j++;
        }
    }

    answer = count === goal.length ? 'Yes' : 'No';

    console.log(answer);
    return answer;
}


// 카드 배열에서 하나씩 꺼내서 단어를 조합해보자
// 테스트 25에서 실패...
// 다른분의 Java 답변 참고 list에 담지않고 그냥 count만 올려주기