let fs = require("fs");
let pieces = fs.readFileSync("/dev/stdin").toString().split(" ");

let suitablePiece = [1, 1, 2, 2, 2, 8];

console.log(pieces.map((piece, index) => suitablePiece[index] - +piece).join(" "));
