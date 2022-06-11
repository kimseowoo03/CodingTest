const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

let N = Number(input[0]);
let num = input[1].split(" ").map(v => Number(v));

let max = num[0];
let min = num[0];

for(let i = 1; i< N; i++){
  if(max < num[i]){
    max = num[i];
  }
  if(min > num[i]){
    min = num[i];
  }
}
console.log(`${min} ${max}`)

