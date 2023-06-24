let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let basketCount = Number(input[0].split(" ")[0]);
let basketArray = Array.from({ length: basketCount }, () => 0).map(
  (n, i) => (n = i + 1)
);

const Count = Number(input[0].split(" ")[1]);

for (let i = 1; i <= Count; i++) {
  const [leftBasket, rightBasket] = input[i].split(" ");
  let arr = basketArray
    .splice(Number(leftBasket - 1), Number(rightBasket - leftBasket + 1))
    .reverse() 
  basketArray.splice(Number(leftBasket - 1), 0, ...arr);
}
console.log(basketArray.join(" "));