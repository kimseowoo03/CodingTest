const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

let N = Number(input[0]); 

for(let i = 1; i <= N; i++){
  let count = 0;
  let sum = 0;

  for(let j =0; j < input[i].length; j++){
    if(input[i][j] === "O") {
      count ++;
    } else{
      count =0;
    }
    sum += count;
  }
  console.log(sum);
}
/*
let N = input[0];
let sum = 1;
let sumNum;
for(let i = 1; i < N; i++){
  let ox = input[i].split("");
  let first = ox[0];
  for(let j =1; j < ox.length; j++){
    if(first == ox[i]){
      if(first === "X"){
        sum = 0;
      }else{
        sum += sum + 1;
      }
      first = ox[i];
    }else{
      sum = 0;
    }
    sumNum += sum;
  }

}
*/