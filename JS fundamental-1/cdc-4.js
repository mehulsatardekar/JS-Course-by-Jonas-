const billAmount = (amount)=>{
   const tipAmount = (amount>=50 && amount<=300)? amount*0.15 : amount*0.20;
   return ` The bill is ${amount} and tip is ${tipAmount} and total amount is ${amount + tipAmount}`
}

console.log( billAmount(40));