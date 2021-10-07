const calcAverage = (score1,score2,score3)=>{
   
    return (score1+score2+score3)/3;
}

const checkwinner= (avgDolphins,avgKoala)=>{
   
    if(avgDolphins>=2*avgKoala){
        return `Dolphins wins by the ${avgDolphins} vs ${avgKoala}`;
    }else if(avgKoala>=2*avgDolphins){
        return `Koalas wins by the ${avgKoala} vs ${avgDolphins}`;
    }else{
        return 'its draw'
    }
    
}
 // Test case 2
 let avgDolphins = calcAverage(85,54,41);
 let avgKoalas = calcAverage(23,34,27);

 let winnerTeam = checkwinner(avgDolphins,avgKoalas)

 console.log(winnerTeam);

 // test case 1
  avgDolphins = calcAverage(44,23,71);
  avgKoalas = calcAverage(65,54,49);

  winnerTeam = checkwinner(avgDolphins,avgKoalas)

 console.log(winnerTeam);