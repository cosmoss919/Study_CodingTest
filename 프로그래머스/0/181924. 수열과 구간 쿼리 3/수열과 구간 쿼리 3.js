function solution(arr, queries) {
    for (const v of queries) {
     let i = v[0];
     let j = v[1];
     let temp = arr[i];
     arr[i] = arr[j];
     arr[j] = temp;
    }

    return arr;
}

/*
function solution(arr, queries) {
    for (const [i, j] of queries) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

*/