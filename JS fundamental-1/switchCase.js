let day ="friday";

switch(day){

    case 'monday':
        console.log("lets check the deploy work ");
        break;
    case 'tuesday':
    case 'wednesday':
        console.log('do the coding part and meetings..');    
        break;
    case 'thrusday':
    case 'friday':
        console.log('dont deploy on thrusday and friday');
        break;
    default:
        console.log('Oops wrap up the work');
}