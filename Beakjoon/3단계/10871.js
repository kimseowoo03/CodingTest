const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

let N = input[0].split(' ').map(x => Number(x));
let X = input[1].split(' ').map(x => Number(x));
// map을 돌려서 받는다.
const answer = [];

for(let i = 0; i <= N[0]; i++){
  if(N[1] > X[i]){
    answer.push(X[i]);
  }
}
console.log(answer.join(' '));
