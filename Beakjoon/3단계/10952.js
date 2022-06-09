const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().split('\n');

for(let i = 0; i < input.length-1; i++){
  let num = input[i].split(' ').map(v => Number(v));
  if(num[0] === 0){
    break;
  }else{
    console.log(num[0] + num[1]);
  }
}
