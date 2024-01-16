//User profile
//Write a program that prompts a user for their data: username, age, 
//and a list of their favorite movies. Store the information and then 
//showcase it in the console. Take note that the output for the films 
//should add a small message like: 'The film {film} is one of my favorites'.
const prompt = require("prompt-sync")();
function userProfile(){
let username = prompt("What's your username? ");
let age = prompt("How old are you? ");
let numberMovies = prompt("How many favorite movies do you have? ");
let numberMoviesN = Number(numberMovies);
let arrayMovies = [];
for(i=0; i<numberMoviesN; i++){
    let favoriteMovies = prompt("What are your favorite movies? ");
    arrayMovies.push(favoriteMovies);}
console.log(`Your username is ${username}`);
console.log(`Your age is ${age}`);
console.log(`Your favorite movies are ${arrayMovies.join(", ")}`);
}
//userProfile()
//*************************************************************************************
//Highest number
//Write a program that asks for 10 numbers. Using logical operators 
//and any other javascript functions/structures you've seen before, 
//determine and output the highest of those numbers.
function highestNumber(){
console.log("Me vas a decir 10 números");
let arrayNumeros = [];
let highest = Number.MIN_SAFE_INTEGER;
for(i=0; i<10; i++){
    let listaNumeros = prompt("Dime un número ");
    let numeros = Number(listaNumeros);
    arrayNumeros.push(numeros);
    if(arrayNumeros[i]>highest){
        highest = numeros;
        console.log(`The highest number is now ${highest}`);
    }
    else{
        console.log(`The highest number is still ${highest}`);
    }
}
console.log(`The highest number is ${highest}`);
}
//highestNumber();
//********************************************************************************* */
//Alarm
//Write a program that asks a user for the amount of seconds needed 
//until an alarm (message) is executed alongside a text to show 
//once those seconds have passed in real time.
//Result example: "Time for bed after 10 seconds".
function alarm(){
    let seconds = prompt("Tell me how many seconds you want to sent off the alarm ");
    console.log(`Time for bed after ${seconds} seconds`)
    //La función setTimeout() ejecuta una acción despues de un determinado numero de milisegundos
    //es decir, es un "delay" para la ejecución.
    setTimeout(() => {
        console.log("Go to bed");
    }, 1000*seconds);
}
//alarm(); 
//********************************************************************************** */
//Palindrome
//Write a program that prompts for a word or sentence (it can be capitalized, 
//have spaces and punctuation). Figure out if the sentence/word is a palindrome 
//or not. Ignoring punctuation, spaces and capitalized letters.
function isPalindrome(){
 let oracion = prompt("Tell me a word or a sentence ");
 let oracionMinus = oracion.toLowerCase();
 //El método .replace() esta relacionado con las expresiones regulares por lo que la 
 //siguiente línea de codigo hará ignorará los espacion y puntuaciones que se hayen en
 // oracionSoloLetras
 let oracionSoloLetras = oracionMinus.replace(/[^\w]/g, '')
 let palindrome = true;
 let len = oracionSoloLetras.length;
 for(i=0;i<len; i++){
     if(oracionSoloLetras[i] === oracionSoloLetras[len-1-i]){
     }
     else{
         palindrome = false;
     } 
 }
console.log(`Palindrome is ${palindrome}`);
}
//isPalindrome();
//*************************************************************************************/
//Factorial
//Write a program that prompts for an intenger number n. Where  1 <= n. 
//Solve this using recursion.
function calcFactorial(){
    let n = prompt("Dime un número natural ");
    function factorial(n){
        if (n===0 || n===1){
            return 1;
        }
        else{
            return n*factorial(n-1);
        }
    }
    console.log(factorial(n));
    }
//calcFactorial();
//**************************************************************************************/
//Flat array
//Write a program that takes the following nested matrix and flattens it 
//(makes it a 1D array). Use any type of algorithm you want like callbacks, 
//recursion, etc...
//let multiDimension = [1, [2, 3, [4, 5, [6]]]];
function flatArray(){
    let multiDimension = [1, [2, 3, [4, 5, [6]]]];
    //El método .flat(n) regresa un nuevo sub arreglo concatenados de forma recursiva hasta la dimensión solicitada
    let flat = multiDimension.flat(3);
    console.log(flat);
}
//flatArray();