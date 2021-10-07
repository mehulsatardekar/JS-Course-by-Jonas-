const Persons=[{
    fullname:"Mark Miller",
    height:1.69,
    weight:78
},
{
    fullname:"John Smith",
    height:1.95,
    weight:92
}]

const workoutsDetails={
    bmis:[],
    calcBmi: function (){
        let bmi;
        Persons.map((person )=>{
           bmi=person.weight / (person.height * person.height)  
            this.bmis.push([person.fullname,bmi.toFixed(2)])  
        })
      return this.bmis;
    }

}

//console.log(workoutsDetails['bmis']);
// console.log(workoutsDetails.calcBmi());

const winner = workoutsDetails.calcBmi();
console.log(winner);
    winner.reduce((a,b)=>{
             (a[1]>b[1])
             ? console.log(`Marks BMI ${a[1]} is higher than Johns BMI ${b[1]}`)
             : console.log(`Johns BMI ${b[1]} is higher than Marks BMI ${a[1]}`)
        ,0})


        