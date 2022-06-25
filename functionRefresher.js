//return statement
/**
 * basically are outputs
 * use the return keyword
 * the return value can be stored
 * 
 * one can only return one thing from a function
 * if you dont allocate the return value to a variable,
 *   you can still access it's value using the appropriate annotation
 *   be it . or [] depending on whether the return value is an array or an object.
 * 
 * return ends function excecution
 */

//function statement
 function divide(x, y){
     return x / y;
 }

 //function expressions
 const multiply = function(x, y){
     return x * y
 }

 //arrow function
 const add = (x, y)=>{
     return x + y
 }

 //higher order functions
 const funcArray = [divide, multiply, add]

 for( let funct of funcArray){
     console.log(funct(4,6))
 }

 //functions as arguments
 let callThrice = function(func, a, b){
    console.log(func());
    console.log(func(func(a, b), func(a, b)));
 }
 
 callThrice(add, 7, 9)

//functions as return values
/** 
 * the parameters passed are like the parts needed to tweak your returned functions
 * into the functions they can be
*/
const multiplyBy= num => {
    return x => {
        return x * num
    }
}



const triple = multiplyBy(3)

//Callbacks
/*
Pass a func tion to another function for it to be executed in that function
*/
// let anonTimeout = setTimeout(function(){
//     alert("this is a callback")
// }, 5000)
// let anonArrowTimeout = setTimeout(()=>{
//     alert("this is also a callback with arrow notation")
// }, 5000)
 