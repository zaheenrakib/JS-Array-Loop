/*

LOOPING Technique
1 for loop
2 while loop
3 Do while --, ignore
4. for of -- > array loop kaorar jonno;
5.for in --> objects loop korar jonno;


*/

const friends = ["Elon" ,"Bill", "Mark","Waren"];

for(const friend of friends){
    // console.log(friend);
}

for(let i = 0; i < friends.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}

const numbers = [5,6,7,8,9,0,10,12,13,14,14,15,154,135,567];

for ( let i = 0;i < numbers.length;i++){
    // console.log(numbers[i]);
}

let i = 0;

while(i < friends.length){
    console.log(friends[i]);
    i++;
}

let n = 0;

while(n < numbers.length){
    console.log(numbers[n]);
    n++;
}