const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

let C = input[0] * 1;

for(let i = 1; i <= C; i++){
  let cnt = 0;
  let numbers = input[i].split(' ');
  let N = numbers.shift() * 1;

  let avg = numbers.reduce((acc, v) => acc += v * 1, 0);
    
  avg /= N;

  for (let j = 0; j < N; j++) {
      if (numbers[j] > avg) {
        cnt++;
      }
  }
  let result = ((cnt / N) * 100).toFixed(3);
  console.log(result + "%");
}