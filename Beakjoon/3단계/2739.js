const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split(' ');
const N = Number(input[0]);

for(let i = 1; i < 10 ; i++){
  console.log(`${N} * ${i} = ${N * i}`);
}