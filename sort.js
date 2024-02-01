const persons = ['rakib','sakib','bulbul','kobir','Pakib','arif','amis','Amis'];

const sortedPerson = persons.sort();
console.log(sortedPerson);

//sort 
const numbers = [1,4,15,7,2,12,3,86];
// const num_asc = numbers.sort(); //Not working
const num_asc = [...numbers].sort(function (a,b){return a-b}); 
const num_dsc = [...numbers].sort(function (a,b){return b-a}); 
console.log(num_asc);
console.log(num_dsc);