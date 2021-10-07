const person={
    name:"snehal",
    isIndian:true,
    age:2021,
    calculateAge:(year)=>{
       const date = new Date();
       const yourAge = person.age-year;
       return yourAge;
    }
}

console.log(person.calculateAge(1999))



// challenge by jonas on make method and return string about you and check if he has driver license or not

/* not if you make your function anonymous / arrow function then remember it has no "this" so you won't
 able to access the property of this object by this keyword . to that either add function keyword or 
 access the property using object name */
const details={
    name:"Mehul",
    location:"India",
    hasDriverLicense:false,
    summary : function (pearsonYear){
        const date = new Date();
        this.age = date.getFullYear()-pearsonYear;
        this.isEligible = (this.hasDriverLicense)?'a' : 'no';
        return `My name is ${this.name} and ${this.age} year old and he has ${this.isEligible} license`
    }
}

console.log(details.summary(1999))
