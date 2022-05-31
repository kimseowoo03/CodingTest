const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);
const maxNum = Math.max(...input); // 받은 값 중 제일 큰 수 반환

if(A == B && B == C){
  console.log(10000 + A * 1000);
}else if(A == B ||  B ==C ){
  console.log(1000 + B * 100);
}else if(A == C){
  console.log(1000 + A * 100);
}else if(A != B && B != C){
  console.log(maxNum*100);
}