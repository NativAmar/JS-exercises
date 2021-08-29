const num = 123;
let sum = 0;
let first=num%10;;
let second=Math.floor(num/10) %10;
let third=Math.floor(num/100);
sum=third+second+first;
console.log(sum);
