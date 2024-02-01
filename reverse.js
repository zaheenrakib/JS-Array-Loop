const numbers = [1,2,3,4,5,6,7,8,9];
// console.log(numbers);
// const reversed =  numbers.reverse();
// console.log(reversed);

const rev_num = [];

for (const num of numbers){
    rev_num.unshift(num);
}
// console.log(rev_num);

const reversed_num = [];
for(let i = 0;i < numbers.length; i++){
    const num = numbers[i];
    reversed_num.unshift(num);
}
// Dicremental for loop revers side 
const rev_rev_number = [];
for (let i = numbers.length -1 ; i >= 0; i --){
    const num = numbers[i];
    console.log(num);
    rev_rev_number.push(num)
}
console.log(rev_rev_number);