const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n').map(x => Number(x));

let max = input[0];
let maxIdx = 0;
for(let i = 1; i < 9; i++){
  if(max < input[i]){
    max = input[i];
    maxIdx = i;
  }
}
console.log(max);
console.log(maxIdx + 1);

//실수 i는 for문 밖에서 인식하지 못하는데 그걸 그대로 사용해버림.