const tips=[];
const totals =[];
const average=[];
const calcTip=(bills)=>{
   for(let a=0; a<bills.length; ++a){
       if(bills[a]>=50 && bills<=300){
          tips.push(bills[a]*0.15);
       } else{
           tips.push(bills[a]*0.20);
       }
       totals.push(tips[a]+ bills[a]);
   }
}

const calcAverage = (totals)=>{
    let sum=0;
   for(let a=0;a<bills.length;++a){
       sum += totals[a]/bills.length;
   }
   average.push(sum)
}
const bills =[22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];
console.log(calcTip(bills))
console.log(calcAverage(totals));
 console.log(tips);
 console.log(totals);
 console.log(average);
