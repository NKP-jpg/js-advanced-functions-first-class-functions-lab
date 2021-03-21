const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
}

const returnLastTwoDrivers = function (arr) {
  return arr.slice(2, 4);
}


const selectingDrivers = (returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers();
}


// (['Sally', 'Bob', 'Freddy', 'Claudia']);

// function fun1() { 
//   function fun2() { 
//       return "From function fun2"; 
//   } 
//   return fun2(); 
// } 
