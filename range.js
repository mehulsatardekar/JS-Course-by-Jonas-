 "use strict"
let num =221;

if(num>=10 && num<=20){
    console.log('its and adult')
}else if(num>=21 && num<=30){
    console.log('its a man')
}else if(num>=31 && num<=40){
    console.log('its a legend')
}else{
    console.log('hes none of this')
}

const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:true});
obj.x = 3.14;            // This will cause an error

