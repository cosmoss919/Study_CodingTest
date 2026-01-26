function solution(my_string, queries) {
        my_string = [...my_string];
    for (const [s, e] of queries) {
        let temp = my_string.splice(s, e - s + 1);
        temp.reverse();
        my_string.splice(s, 0, ...temp);
    }

    return my_string.join('');
}

/* 처음에는 굳이 splice를 사용할 이유가 없음
function solution(my_string, queries) {
    const arr = [...my_string];

    for (const [s, e] of queries) {
        const reversed = arr
            .slice(s, e + 1)
            .reverse();

        arr.splice(s, e - s + 1, ...reversed);
    }

    return arr.join('');
}
*/