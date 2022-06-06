const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString();
for(let i = 1; i <= input; i++){
  let star = "";
  for(let j = input; j>0; j--){
    star += j <= i ? '*' : ' ';
  }
  console.log(star);
};
// 문자열을 추가 할 때는 += 연산자를 사용하자.