let jhonWeight, markWeight;
let jhonHeight, markHeight;

function bmiCalculate(weight,height){
  const bmi = weight / (height * height);
  return bmi;
}
const markBmi = bmiCalculate(78, 1.69);
const jhonBmi = bmiCalculate(92,1.95);

if(markBmi > jhonBmi){
    console.log(`Mark's BMI is ${markBmi} higher than Jhon's ${jhonBmi}`);
}else{
    console.log(`Jhon's BMI is ${jhonBmi} higher than Marks ${markBmi}`);
}
console.log(`Marks BMI is = `, bmiCalculate(78, 1.69) );

console.log(`Jhon's BMI is = ${bmiCalculate(92,1.95)}`);


