//ways to create Arrays 
const arr=[12,33,444];

const namesAndAges = ["alex","ram","sham", ...arr];

console.log(namesAndAges);

// it create copy of array which is iterable
const copyOfNamesAndAges = Array.from(namesAndAges);

console.log(copyOfNamesAndAges);


// Arrays of is work same as array.from regardless of number / type of arg

const cpOfNamesAndAges = Array.of(namesAndAges);

console.log(cpOfNamesAndAges);

const copyOfNamesAndAges2 = Array.of(3); // we have created 3 empty slots array

copyOfNamesAndAges2[4]="ales";
console.log(copyOfNamesAndAges2);




// only primitive values are immutable in JS
// arrays are non primitive so they are mutable means changable even its it declared as constant;

const ages =[12,33,4];
ages[2]=44;
console.log(ages) 

