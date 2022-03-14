console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test--helloName should say "Hello, Liz!"', helloName('Liz'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
  //Question--is it best practice to save the above to a variable and then return that variable?
  //Or is that unnecessary if we're not doing anything further w/ the answer besides printing to console?
}
console.log('Test--addNumbers with -5 and 3, should be -2:', addNumbers(-5,3));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  return num1*num2*num3;
}
console.log('Test--multiplyThree with 2, 10, -8 should return -160:', multiplyThree(2,10,-8));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length-1];
}
console.log('getLast for [ ]:', getLast([ ]));
console.log('getLast for [ "oatmeal", 3 ]:', getLast([ 'oatmeal', 3]));
console.log('getLast for [ "blue heron" ]:', getLast([ 'blue heron' ]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){
  let answer = false;//default to false unless value matches array item
  for (let i in array){
    if (value === array[i]){
      answer = true;//modify answer to true if match is found
    } 
  } return answer;
}

// first solution to question:
// function find( value, array ){
//   //0. set default answer to false 1. loop through array 2. compare value and use if statement for outcome 3. profit?
//   let answer = false;
//   for (let i=0; i<array.length; i++){
//     console.log(`in loop with ${array[i]}`);//checking that it loops through every item
//     if (value === array[i]){
//       answer = true;
//     } 
//   } return answer;
// }

console.log('find(42, [6, true, "snakes"]) should be false:', find(42, [6, true, 'snakes']));
console.log('find(42, [6, 42, "snakes"]) should be true:', find(42, [6, 42, 'snakes']));
console.log('find(false, [6, false, "snakes"]) should be true:', find(false, [6, false, 'snakes']));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(string[0]) === letter) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
