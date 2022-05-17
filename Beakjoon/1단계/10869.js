const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(parselnt(A/B));
console.log(A%B);
 // 나누기 같은 경우에는 parselnt를 사용하여 소수점을 제외한 정수만 나오게 한다.