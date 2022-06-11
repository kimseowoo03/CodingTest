const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

let result = String(input[0] * input[1] * input[2]);

for(let i = 0; i < 10; i++){
  let count = 0;
  for(let j = 0; j < result.length; j++){
    if(Number(result[j]) == i) {
      count++;
    }
  }
  console.log(count)
}