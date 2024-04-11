//https://www.acmicpc.net/problem/2753

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const year = parseInt(input);
if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    console.log(1);
} else{
    console.log(0);
}

//시간이 엄청 오래걸리는데 이유를 잘 모르겠음
//!! AI 한테 물어봐야지
//AI도 딱히 느릴이유가 없다네,,,;;