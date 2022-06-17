let arr = [];
let result = [];

for(let i = 1; i <=10000; i++){
  let N = 0;
  let stringNum = String(i);
  for(let j =0; j < stringNum.length; j++){
    N += Number(stringNum[j]);
  }
  let nNum = i + N; 
  arr.push(nNum);
}

for(let i = 1; i <=10000; i++){
  if(arr.indexOf(i) === -1){
    result += i + "\n";
  }
}

console.log(result);