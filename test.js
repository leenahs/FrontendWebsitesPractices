// * src: https://dmitripavlutin.com/swap-variables-javascript/
let a = 5;
let b = 10;

[a, b] = [b, a]; // * swapping variables by destructuring assignment

console.log(a);
console.log(b);