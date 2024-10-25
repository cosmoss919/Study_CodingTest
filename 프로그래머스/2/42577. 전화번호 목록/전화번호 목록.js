/*function solution(phone_book) {
    let minLength = Math.min(...(phone_book.map(x => x.toString().length)));
    let set = new Set();
    for (let i = 0; i < phone_book.length; i++) {
        let num = phone_book[i].slice(0, minLength);
        if(set.has(num)) return false;
        else set.add(num);
    }

    return true;
}*/


// function solution(phone_book) {
//     let minLength = Math.min(...(phone_book.map(x => x.toString().length)));
//     let maxLength = Math.max(...(phone_book.map(x => x.toString().length)));
//     while(minLength < maxLength) {
//         let set = new Set();
//         for (let i = 0; i < phone_book.length; i++) {
//             let num = phone_book[i].slice(0, minLength);
//             if (set.has(num)) return false;
//             else set.add(num);
//         }
//         minLength++;
//     }
//     return true;
// }

// function solution(phone_book) {
//     phone_book = phone_book.sort((a, b) => a.length - b.length);
//     for (let i = 0; i < phone_book.length - 1; i++) {
//         for (let j = i + 1; j < phone_book.length; j++) {
//             if(phone_book[j].startsWith(phone_book[i])) return false;
//         }
//     }
//     return true;
// }

function solution(phone_book) {
    // 1. 해시맵 생성 및 모든 전화번호를 해시맵에 저장
    const hashMap = new Set(phone_book);

    // 2. 각 전화번호의 가능한 모든 접두어를 확인
    for(const phoneNumber of phone_book) {
        // 현재 번호를 한글자씩 잘라가면서 그 접두어가 해시맵에 있는지 확인
        for(let i = 1; i < phoneNumber.length; i++) {
            const prefix = phoneNumber.slice(0, i);
            // 접두어가 해시맵에 있다면 false 반환
            if(hashMap.has(prefix)) {
                return false;
            }
        }
    }

    return true;
}