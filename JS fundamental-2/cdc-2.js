const calculateTip =(billValue)=>{
    if(billValue=>50 && billValue<=300){
       //15% tip of bill
        return billValue * 0.15;
    }else{
       // 20% tip of bill
       return billValue * 0.20;
    }
}

console.log(calculateTip(125));

//Bonus Part with extended
const calculateTipExtended = (bills) => {
  let tipsOnbill;
  const tips = [];
  bills.map((bill) => {
    if (bill > 50 && bill < 300) {
      tipsOnbill = bill * 0.15;
      tips.push(tipsOnbill);
    } else {
      tipsOnbill = bill * 0.2;
      tips.push(tipsOnbill);
    }
  });
   return tips;
};

const calculateBillsAndTips = (bills,tips)=>{
      const totalBillandTip=[];
    for(let a=0;a<bills.length;++a){
        console.log(bills[a]+ tips[a]);
        totalBillandTip.push (bills[a]+ tips[a]);
    }
    return totalBillandTip;
}

const bills = [125,555,44];
const tips = calculateTipExtended(bills);

const totalOfBillsAndTips = calculateBillsAndTips(bills,tips)
console.log(totalOfBillsAndTips);