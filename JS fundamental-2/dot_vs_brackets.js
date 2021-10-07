const person ={
    name:"mehul",
    age:12
}

console.log(person.name);
console.log(person['name'])

/* The main difference between . vs [] is how we access the data because "." only works with property
and [] works with value type .

EG : console.log(person.name) here name is the property and when we access the property from object
we use . operator

but with [] operator things get changes suppose you have store the value into variable and want 
to access from object how would you do that?

EG : const yourChoice ="name";

console.log(person.yourChoice)  this will give an error ofcourse you try to access the property
which is not available for that [] come into rescue

we can do that way console.log(person[yourchoice])

*/

const yourchoice = 'age';
console.log(person[yourchoice])

console.log(person);

// To add properties into object

person.country ="India"
person['city'] ="mumbai"

console.log(person);

// challenge from Jonas on Object add 3 friends into object as array 

person.friends =["Mehul","Simran","Sneha"]

console.log(person);


// And now First on is his favourite friend;

const bestFriend = person.friends[0]
console.log(`Best Friend is ${bestFriend}`);
