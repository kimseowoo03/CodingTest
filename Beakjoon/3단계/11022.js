const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

const T = input[0]

for(let i = 1; i <= T; i++){
  let num = input[i].split(' ');
  console.log(`Case #${i}: ${Number(num[0])} + ${Number(num[1])} = ${Number(num[0]) + Number(num[1])}`);
}