const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').toString().trim().split('\n').map(x => +x);

const array = input.map((x) => x % 42);
const set = new Set(array);
const arr = [...set];
console.log(arr.length);
// Set 객체를 사용하여 배열의 중복제거 함.

/*
let count = 0;
let nums = [];

for(let i = 0; i < 11; i++){
  let num = input[i];
  let remainder = num % 42;
  nums.push(remainder);
  if( i == 10 ){
    for(let j = 1; j < nums.length; j++){
      let nums0 = nums[0];
      let nums1 = nums[j];
      if(nums0 != nums1){
        count++;
      }
    }
    if(count == 0){
      console.log(1);
    }else{
      console.log(count);
    }
  }
}
*/