const Names = ["Mehul","Simran","Alex","Scott"]

console.log(Names);

//Adding values 

// push() it added vales to the end of an array
const addedNameLength = Names.push("Rohan") // also it return the length of array
console.log(addedNameLength);
console.log(Names);

// unshift() it adds the value from front of an array;
const addedNameLength2 =Names.unshift("Mrunmai"); // it return the length of an array
console.log(addedNameLength2);
console.log(Names);

// Removing values

// pop() it removes the  element  from end of an array

const removedName =Names.pop(); // it return removed element from array
console.log(removedName);
console.log(Names);

// shift() it removes the element from front of an array

const removedName2 = Names.shift(); // it return removed element from array
console.log(removedName2);
console.log(Names);

// finding element index  
console.log(Names.indexOf('Simran'))

// find if element is present or not
console.log(Names.includes('Mehul'));
const ages =[12,344];
console.log(ages.includes(12)); //  .includes does strict type checking 
console.log(ages.includes('12')); // false .. it is string so it does'nt do type coersion (means auto type casting by default)
