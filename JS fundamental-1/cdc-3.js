const dolphineTeam = (score)=>{

     let sum=0,avg=0;

     for(let a=0;a<score.length;++a){
         sum=sum+score[a];
     }
      return avg=sum/score.length;


}

const koalaTeam = (score)=>{
    let sum=0,avg=0;

    for(let a=0;a<score.length;++a){
        sum=sum+score[a];
    }
    return avg=sum/score.length;
}

const firstMatchOfDolphine= dolphineTeam([97,112,101])

const firstMatchOfKoala= dolphineTeam([109,95,123])

console.log(firstMatchOfDolphine , firstMatchOfKoala);
if(firstMatchOfDolphine>=100 && firstMatchOfKoala>=100){

    if(firstMatchOfDolphine>firstMatchOfKoala){
        console.log(` Dolphine Team Wins with the avg of  ${firstMatchOfDolphine}`);
    }else if(firstMatchOfDolphine === firstMatchOfKoala){
        console.log('Its a tie');
    }else{
        console.log(`Koala team wins with the avg of ${firstMatchOfKoala}`);
    }
}else{
    console.log('No one wins the trophy');
}
