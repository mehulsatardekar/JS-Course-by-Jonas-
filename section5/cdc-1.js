// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

const printForcast = (arr) => {
  let data = "";
  arr.forEach((e, index) => {
    data += `...${e}c in ${index + 1} days \t`;
  });
  console.log(data);
};

printForcast([17, 21, 23]);
printForcast([12, 5, -5, 0, 4]);
