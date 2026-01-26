function solution(my_string, queries) {
        my_string = [...my_string];
    for (const [s, e] of queries) {
        let temp = my_string.splice(s, e - s + 1);
        temp.reverse();
        my_string.splice(s, 0, ...temp);
    }

    return my_string.join('');
}